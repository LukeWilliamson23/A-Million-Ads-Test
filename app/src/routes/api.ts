// import * as express from 'express'
import { Router } from 'express';
import Controller from '../controller/controller';


class ApiRouter {

  // Need to build class around express.router
  public router: Router;

  constructor() {
    this.router = Router();
    this.addRoutes();
  }

  // mounts routes to router
  public addRoutes() {
    this.router.get('/:num', Controller.calculatePrime);
  }
}

// need to initiate the router before we export it.
const apiRouter = new ApiRouter();

export default apiRouter.router;