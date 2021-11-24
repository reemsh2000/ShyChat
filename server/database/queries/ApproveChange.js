const connection = require('../config/connection');

const ApproveChange = ({ userId }) => connection.query(
  'UPDATE users SET approve = true WHERE id = $1',
  [userId],
);

module.exports = ApproveChange;
