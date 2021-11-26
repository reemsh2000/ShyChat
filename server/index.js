const { server, app } = require('./app');

server.listen(app.get('port'), () => {
  console.log(`server is running http://localhost:${app.get('port')}`);
});
