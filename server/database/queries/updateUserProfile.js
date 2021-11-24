const connection = require('../config/connection');

const updateUserProfile = ({ image, bioText, id }) => connection.query('UPDATE users SET photo=$1, bio=$2 WHERE id=$3', [
  image,
  bioText,
  id,
]);

module.exports = updateUserProfile;
