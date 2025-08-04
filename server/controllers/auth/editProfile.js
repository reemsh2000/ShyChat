const { getPhotoById, updateUserProfile } = require('../../database/queries');
const { uploadToCloudinary, signToken } = require('../utilities');

const editProfile = async (req, res) => {
  const { bioText, id } = req.body;
  let { image } = req.body;
  try {
    const { rows } = await getPhotoById(id);
    let { photo } = rows[0];
    const { name, email, bio } = rows[0];
    if (image !== photo && !!image) {
      const { url } = await uploadToCloudinary(image, {
        upload_preset: 'dev_setup',
      });
      image = url;
    }
    photo = image ?? photo;
    await updateUserProfile({ image, bioText, id });
    const hashedToken = await signToken({
      id,
      email,
      photo,
      bio,
      name,
    });
    res.cookie('token', hashedToken).status(200).json({
      message: 'update user Information successfully',
    });
    // res.status(200).json({ message: 'update user Information successfully' });
  } catch (error) {
    res.status(400).json({ message: 'your photo does not supported' });
  }
};

module.exports = editProfile;
