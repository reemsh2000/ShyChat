const Joi = require('joi');

const schema = Joi.object().keys({
  userName: Joi.string().min(4).required()
    .messages({
      'string.base': 'username must be a string',
      'string.empty': 'user name can not be empty!',
      'string.min': ' user name at least must content 4 letters',
      'any.required': 'user name is required',
    }),
  phoneNumber: Joi.string().min(8).required()
    .messages({
      'string.base': 'Phone Number must be a string',
      'string.empty': 'Phone Number can not be empty!',
      'string.min': ' Phone Number at least must content 8 letters',
      'any.required': 'Phone Number is required',
    }),
  password: Joi.string().required().min(7)
    .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/)
    .messages({
      'string.pattern.base': ' your password must follow this pattern Aa!1  ',
      'string.empty': 'your password can not be empty',
      'string.min': ' your password must contain at least 7 letters',
      'any.required': ' password is required ',
    }),
  confirmPassword: Joi.ref('password'),
}).options({ abortEarly: false });

module.exports = schema;
