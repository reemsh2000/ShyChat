const connection = require('../config/connection');

const ApproveChange = (phoneNumber) => connection.query(
  'UPDATE users SET approve = true WHERE phone = $1',
  [phoneNumber],
);

module.exports = ApproveChange;
