import { Request, Response } from 'express';
import * as projectModel from '../models/project';

type Project = typeof projectModel;

export const list = (model: Project) => async (req: Request, res: Response) => {
  const projects = await model.find();
  return res.send({ results: projects });
};

export const get = (model: Project) => async (req: Request, res: Response) => {
  const { params } = req;

  // We use celebrate to validate this param in middleware so we know this is typesafe
  const id = parseInt(params.id, 10);
  const v = await model.findById(id);

  if (!v) {
    return res.status(404).send({ message: 'No project with that ID' });
  }

  return res.send(v);
};

export const create = (model: Project) => async (req: Request, res: Response) => {
  const { body } = req;
  const id = await model.create(body);
  
  return res.send({ id });
};
