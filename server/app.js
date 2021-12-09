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
  path: '/ws',
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.set('port', process.env.PORT || 9000);
app.disable('x-powered-by');
app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
const createChat = require('./controllers/chat');
const { addNewMessage } = require('./database/queries/chat');

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on('send_message', async (data) => {
    const {
      userid, receiverId, content, messagetime,
    } = data;
    await createChat(userid, receiverId, socket);
    await addNewMessage(userid, content, messagetime, socket.chatId);
    socket.to(socket.chatId).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log('User Disconnected', socket.id);
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  // app.all('*', (req, res) => res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html')));
}
module.exports = { io, app, server };
