const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().min(8).required(),
  password: joi.string().min(5).required(),
});

module.exports = loginSchema;
