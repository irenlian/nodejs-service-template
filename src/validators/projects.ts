import { Joi } from 'celebrate';
import { ProjectStatuses } from '../enums'

export const id = {
  params: Joi.object({
    id: Joi.number().positive().integer(),
  }),
};

export const create = {
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    logo: Joi.string().optional(),
    templateId: Joi.number().required(),
    startDate: Joi.date().optional(),
    endDate: Joi.date().optional(),
  }),
};

export const options = { allowUnknown: true, stripUnknown: true };
