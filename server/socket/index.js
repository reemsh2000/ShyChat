const http = require('http');
const { Server } = require('socket.io');
const app = require('../app');
const createChat = require('../controllers/chat');
// const addNewMessage = require('..cle/database/queries/chat/addNewMessage');

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
io.on('connection', (socket) => {
  // console.log(`User Connected: ${socket.id}`);

  socket.on('join_room', (data) => {
    socket.join(data);
    // console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on('send_message', async (data) => {
    // console.log(data);
    const { senderId, receiverPhone, room } = data;
    await createChat(senderId, receiverPhone, socket);
    console.log('id',socket.chatId);
    socket.to(room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    // console.log('User Disconnected', socket.id);
  });
});

module.exports = server;
