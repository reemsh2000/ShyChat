const addNewUser = require('./addNewUser');
const checkPhoneQuery = require('./checkPhoneQuery');
const getPhotoById = require('./getUserById');
const updateUserProfile = require('./updateUserProfile');
const ApproveChange = require('./ApproveChange');
const getIdByPhoneNumber = require('./getUserIdByPhoneNumber');

module.exports = {
  addNewUser, checkPhoneQuery, getPhotoById, updateUserProfile, ApproveChange, getIdByPhoneNumber,
};
