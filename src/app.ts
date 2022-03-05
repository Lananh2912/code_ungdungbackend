import express from 'express';

import loaders from './loaders';
import configs from './configs';

const startServer = async () => {
  const app = express();
  const port = configs.port;

  await loaders(app);

  app.listen(port, () => {
    console.log(`App was running at port ${port}`);
  });
};

startServer();
