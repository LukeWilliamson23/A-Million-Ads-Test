import { Request, Response, NextFunction } from 'express';


class ErrorHandlers {

  // If route not found, make a new error a pass it along.
  public notFound = (req: Request, res: Response, next: NextFunction): void => {
    res.status(404);
    const err = {
      error: 'Not Found'
    }
    res.json(err);
  }

}

const errorHandlers = new ErrorHandlers();

export default errorHandlers;
