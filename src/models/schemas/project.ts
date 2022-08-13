import joi from 'joi';

export const createProjectSchema = {
    title: joi.string().required(),
    description: joi.string().required(),
    logo: joi.string().optional(),
    templateId: joi.number().required(),
    startDate: joi.date().optional(),
    endDate: joi.date().optional(),
};