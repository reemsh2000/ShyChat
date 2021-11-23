const { getPhotoById, updateUserProfile } = require('../../database/queries');
const { uploadToCloudinary } = require('../utilities');

const editProfile = async (req, res) => {
  const { bioText } = req.body;
  let { image } = req.body;
  const { id } = req.userObj;
  try {
    const { rows } = await getPhotoById(id);
    const { photo } = rows[0];

    if (image !== photo) {
      const { url } = await uploadToCloudinary(image, {
        upload_preset: 'dev_setup',
      });
      image = url;
    }
    await updateUserProfile({ image, bioText, id });
    res.status(200).json({ message: 'update user Information successfully' });
  } catch (error) {
    res.status(400).json({ message: 'your photo does not supported' });
  }
};

module.exports = editProfile;
