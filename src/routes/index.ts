import Express from 'express';
import projectRoutes from './project';
import statusRoutes from './status';

export default (app: Express.Application) => {
  projectRoutes(app);
  statusRoutes(app);
};
