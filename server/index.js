/* eslint-disable no-console */
const { Server } = require('socket.io');
const { app } = require('./app');

const server = app.listen(app.get('port'), () => {
  console.log('server is running http://localhost:9000');
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

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
