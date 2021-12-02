import Joi from "joi-browser";

export const schema = Joi.object({
    userName: Joi.string().min(4).label("User Name").required(),
    phoneNumber: Joi.string().min(8).label("Phone Number").required(),
    password: Joi.string()
      .required()
      .min(7)
      .label("Password")
      .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/),
    confirmPassword: Joi.ref("password"),
  }).options({abortEarly: false });
