const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function uploadToCloudinary(file) {
  // eslint-disable-next-line max-len
  console.log({ val: process.env.CLOUDINARY_NAME, key: process.env.CLOUDINARY_API_KEY, sec: process.env.CLOUDINARY_API_SECRET });
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file, { resource_type: 'auto' }, (err, url) => {
      if (err) {
        reject(err);
      } else {
        console.log({ url });
        resolve(url);
      }
    });
  });
}

module.exports = uploadToCloudinary;
