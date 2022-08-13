import { Joi } from 'celebrate';

export const id = {
  params: Joi.object({
    id: Joi.number().positive().integer(),
  }),
};

export const create = {
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    leaderUserId: Joi.number().required(),
    logo: Joi.string().required(),
  }),
};

export const options = { allowUnknown: true, stripUnknown: true };
