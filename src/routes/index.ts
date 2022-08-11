import Express from 'express';
import itemRoutes from './item';
import statusRoutes from './status';

export default (app: Express.Application) => {
  itemRoutes(app);
  statusRoutes(app);
};
