import * as express from 'express';
import * as bodyParser from 'body-parser';
import apiRouter from './routes/index';

class App {

  public express: express.Application;

  // construct our express app
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    // remove
    this.express.use(bodyParser.json());
  }

  // Initiate routers  
  private routes(): void {
    this.express.use('/', apiRouter);
  }

}

export default new App().express;
