import Joi from "joi-browser";

export const schema = Joi.object({
    code: Joi.string().length(6).label("Code").required(),
    phoneNumber: Joi.string().min(8).label("Phone Number").required(),
  }).options({abortEarly: false });
