/* eslint-disable no-console */
const { app, server } = require('./app');

app.listen(9000, () => {
  console.log('server is running http://localhost:9000');
});

// server.listen(7000, () => {
//   console.log('socket server is running');
// });
