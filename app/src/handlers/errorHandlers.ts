import { Request, Response, NextFunction } from 'express';


class ErrorHandlers {

  // If route not found, make a new error a pass it along.
  public notFound = (req: Request, res: Response, next: NextFunction): void => {
    const err = new Error();
    err.message = 'Not found';
    res.status(404);

    next(err);
  }

  // send back error message and error status code.
  public handleError = (err, req: Request, res: Response): void => {
    const errorDetails = {
      status: res.status(),
      message: err.message,
      stack: err.stack || '',
    };
    res.json(errorDetails);
  }

}


const errorHandlers = new ErrorHandlers();

export default errorHandlers;
