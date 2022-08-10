import { Joi } from 'celebrate';

export const id = {
  params: Joi.object({
    id: Joi.number().positive().integer(),
  }),
};

export const createOrUpdate = {
  body: Joi.object({
    name: Joi.string().required(),
  }),
};

export const options = { allowUnknown: true, stripUnknown: true };
