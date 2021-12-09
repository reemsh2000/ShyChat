require('env2')('.env');

const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { join } = require('path');
const cors = require('cors');
// const server = require('./socket');

const http = require('http');

const app = express();
const router = require('./routes');

const server = http.createServer(http);

app.set('port', process.env.PORT || 9000);
app.disable('x-powered-by');
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  }),
);
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.all('*', (req, res) => res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html')));
}

module.exports = { app, server };
