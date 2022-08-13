import Express from 'express';
import { celebrate } from 'celebrate';
import { get, list, create } from '../controllers/project';
import * as validator from '../validators/projects';
import * as model from '../models/project';
import wrap from '../middleware/wrap';

export default (app: Express.Application) => {
  app.get('/api/v1/project', wrap(list(model)));
  app.get('/api/v1/project/:id', celebrate(validator.id), wrap(get(model)));
  app.post('/api/v1/project', celebrate(validator.create, validator.options), wrap(create(model)));
};
