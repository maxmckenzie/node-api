import bodyParser from 'body-parser';
import express from 'express';
import logger from './logger';

import defaultRoute from './routes/default';

const appName = 'Node API';
const app = express();
const port = process.env.PORT || 5555;

app.use(bodyParser.json());
app.get('/', defaultRoute);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    logger.info(`${appName} listening on port ${port}...`);
  });
}

export default app;
