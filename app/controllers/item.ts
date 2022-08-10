import Express from 'express';
import * as itemModel from '../models/item';
import Joi from 'joi';

type Item = typeof itemModel;

export const list = (model: Item) => async (req: Express.Request, res: Express.Response) => {
  const items = await model.find();
  return res.send({ results: items });
};

export const get = (model: Item) => async (req: Express.Request, res: Express.Response) => {
  const { params } = req;

  // We use celebrate to validate this param in middleware so we know this is typesafe
  const id = parseInt(params.id, 10);
  const v = await model.findById(id);

  if (!v) {
    return res.status(404).send({ message: 'No item with that ID' });
  }

  return res.send(v);
};

export const create = (model: Item) => async (req: Express.Request, res: Express.Response) => {
  const { body } = req;
  const id = await model.create(body);
  return res.send({ id });
};

export const update = (model: Item) => async (req: Express.Request, res: Express.Response) => {
  const { params, body } = req;
  const id = parseInt(params.id, 10);
  const valid = Joi.number().validate(id);

  if (valid.error) {
    return res.status(400).send({ message: 'ID was not a number' });
  }

  const updateCount = await model.update(id, body);

  if (!updateCount) {
    return res.status(404).send({ message: 'No item with that ID' });
  }
  return res.send({ id: req.params.id });
};
