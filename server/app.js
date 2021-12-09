require('env2')('.env');

const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { join } = require('path');
const cors = require('cors');
// const server = require('./socket');

const http = require('http');
const { Server } = require('socket.io');

const app = express();
const router = require('./routes');

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.set('port', process.env.PORT || 6000);
app.disable('x-powered-by');
app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

server.listen(7000, () => {
  console.log('socket server is running');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.all('*', (req, res) => res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html')));
}
module.exports = { io, app };
