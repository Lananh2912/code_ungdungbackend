import express, { Application } from 'express';
import path from 'path';
import session from 'express-session';

import routes from '../routes';
import configs from '../configs';

export default async (app: Application) => {
  // load middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.set('trust proxy', 1); // trust first proxy
  app.use(session({ secret: 'hoang' }));

  // set view engine
  const viewsLocation = path.join(
    process.cwd(),
    configs.isDev ? 'src' : 'dist',
    './views'
  );
  app.set('view engine', 'pug');
  app.set('views', viewsLocation);

  // load routes
  app.use(routes);
};
