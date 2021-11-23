const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const app = require('../app');

const server = http.createServer(app);

app.use((cors));
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});
io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);
});
