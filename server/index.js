/* eslint-disable no-console */
const { server, app } = require('./app');

app.listen(app.get('port'), () => {
  console.log(`server is running http://localhost:${app.get('port')}`);
});

server.listen(7000, () => {
  console.log('socket server is running');
});
