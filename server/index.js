/* eslint-disable no-console */
const { app } = require('./app');

app.listen(app.get('port'), () => {
  console.log('server is running http://localhost:9000');
});

// server.listen(7000, () => {
//   console.log('socket server is running');
// });
