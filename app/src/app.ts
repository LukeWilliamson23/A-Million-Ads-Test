import * as express from 'express';
import * as bodyParser from 'body-parser';
import apiRouter from './routes/api';

// express application class
class App {

  public express: express.Application;

  // construct our express app
  constructor() {
    this.express = express();
    //this.middleware();
    this.routes();
  }

  private middleware(): void {
    // remove
  }

  // Initiate routers  
  private routes(): void {
    this.express.use('/api', apiRouter);
  }

}

export default new App().express;
