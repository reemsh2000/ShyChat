// const http = require('http');
// const { Server } = require('socket.io');
const io = require('../app');
// const createChat = require('../controllers/chat');
// const { addNewMessage } = require('../database/queries/chat');

// io.on('connection', (socket) => {
//   // console.log(`User Connected: ${socket.id}`);

//   socket.on('send_message', async (data) => {
//     // console.log(data);
//     const {
//       userid, receiverId, content, messagetime,
//     } = data;
//     await createChat(userid, receiverId, socket);
//     await addNewMessage(userid, content, messagetime, socket.chatId);
//     socket.to(socket.chatId).emit('receive_message', data);
//   });

//   socket.on('disconnect', () => {
//     // eslint-disable-next-line no-console
//     console.log('User Disconnected', socket.id);
//   });
// });

module.exports = io;
