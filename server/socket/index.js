const http = require('http');
const { Server } = require('socket.io');
const app = require('../app');
const createChat = require('../controllers/chat');
const { addNewMessage } = require('../database/queries/chat');

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
  },
});
io.on('connection', (socket) => {
  // console.log(`User Connected: ${socket.id}`);

  socket.on('send_message', async (data) => {
    // console.log(data);
    const {
      senderId, receiverId, message, time,
    } = data;
    await createChat(senderId, receiverId, socket);
    await addNewMessage(senderId, message, time, socket.chatId);
    socket.to(socket.chatId).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log('User Disconnected', socket.id);
  });
});

module.exports = server;
