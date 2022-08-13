import joi from 'joi';

export const createProjectSchema = {
    title: joi.string().required(),
    description: joi.string().required(),
    logo: joi.string().required(),
};