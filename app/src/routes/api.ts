// import * as express from 'express'
import { Router, Request, Response } from 'express';
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

const apiRouter = new ApiRouter();

export default apiRouter.router;