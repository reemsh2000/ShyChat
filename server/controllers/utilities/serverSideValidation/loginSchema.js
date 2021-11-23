const joi = require('joi');

const loginSchema = joi.object({
  phoneNumber: joi.string().length(10).pattern(/^[0-9]+$/).required(),
  password: joi.string().min(5).required(),
});

module.exports = loginSchema;
