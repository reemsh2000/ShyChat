const connection = require('../config/connection');

const ApproveChange = (email) => connection.query(
  'UPDATE users SET approve = true WHERE email = $1',
  [email],
);

module.exports = ApproveChange;
