import Joi from "joi-browser";

export const schema = Joi.object()
  .keys({
    email: Joi.string().min(8).label("Email").required(),
    password: Joi.string()
      .required()
      .min(7)
      .label("Password")
      .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/),
  })
  .options({ abortEarly: true });
