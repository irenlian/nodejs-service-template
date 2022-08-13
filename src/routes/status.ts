import Express from 'express';
import { get } from '../controllers/status';
import wrap from '../middleware/wrap';
import authorize from '../middleware/authorize';

export default (app: Express.Application) => {
  app.get('/api/v1/status', authorize, wrap(get()));
};
