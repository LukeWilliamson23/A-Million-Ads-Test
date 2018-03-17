import * as express from 'express'
import router from './routes/index'


class App{

  // public variable
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  // method to mount routes to express obj
  private mountRoutes (): void{
    this.express.use('/', router)
  }
}

export default new App().express