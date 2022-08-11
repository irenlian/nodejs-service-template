import Express from 'express';
import { celebrate } from 'celebrate';
import { get, list, create, update } from '../controllers/item';
import * as validator from '../validators/items';
import * as model from '../models/item';
import wrap from '../middleware/wrap';

export default (app: Express.Application) => {
  app.get('/api/v1/items', wrap(list(model)));
  app.get('/api/v1/item/:id', celebrate(validator.id), wrap(get(model)));
  app.post('/api/v1/item', celebrate(validator.createOrUpdate, validator.options), wrap(create(model)));
  app.put(
    '/api/v1/item/:id',
    celebrate(validator.id),
    celebrate(validator.createOrUpdate, validator.options),
    wrap(update(model)),
  );
};
