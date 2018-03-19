import { Router, Request, Response } from 'express';


class Controller {

  public calculatePrime = (req: Request, res: Response): void => {
    const isPrime: boolean = this.isPrime(req.params.num);
    res.status(200);
    res.json({ 'prime number is': isPrime });
  }

  private isPrime = (num: number): boolean => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
}

export default new Controller();
