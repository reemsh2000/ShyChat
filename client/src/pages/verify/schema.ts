import Joi from "joi-browser";

export const schema = Joi.object({
    code: Joi.string().length(6).label("Code").required(),
    email: Joi.string().min(8).label("Email").required(),
  }).options({abortEarly: false });
