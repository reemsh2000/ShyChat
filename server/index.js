/* eslint-disable no-console */
const { app } = require('./app');

app.listen(app.get('port'), () => {
  console.log(`server is running http://localhost:${app.get('port')}`);
});
