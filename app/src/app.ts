import * as express from 'express';
import * as bodyParser from 'body-parser';
import apiRouter from './routes/api';
import errorHandlers from './handlers/errorHandlers';

// express application class
class App {

  public express: express.Application;

  // construct our express app
  constructor() {
    this.express = express();
    //this.middleware();
    this.routes();
    this.errorHandling();
  }

  private middleware(): void {
    // remove
  }

  // Initiate routers  
  private routes(): void {
    this.express.use('/api', apiRouter.router);
  }

  private errorHandling(): void {
    this.express.use(errorHandlers.notFound);
  }

}

export default new App().express;
