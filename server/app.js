require('env2')('.env');

const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { join } = require('path');
const cors = require('cors');
const server = require('./socket');

const app = express();
const router = require('./routes');

app.set('port', process.env.PORT || 6000);
app.disable('x-powered-by');
app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.all('*', (req, res) => res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html')));
}
module.exports = { server, app };
