import { Router, Request, Response, NextFunction } from 'express';


class Controller {

  /**
   * takes the request params and returns the nearest prime
   */
  public calculatePrime = (req: Request, res: Response, next: NextFunction): void => {

    // converts input into a number / NaN
    const input: number = Number(req.params.num);

    // if input is not a number: return error
    if (isNaN(input)) {

      const err = {
        error: 'Input is not a number'
      }
      res.status(400);
      res.json(err);
      return;
    }

    // If input is negative: return error.
    if (Math.sign(input) === -1) {

      const err = {
        error: 'Negative numbers are not prime numbers. (Nearest will always be 2.)'
      }
      res.status(400);
      res.json(err);
      return;
    }

    // if current number is prime, return that, else run nearestPrime
    const nearestPrimeValue: number = this.isPrime(input) ? input : this.nearestPrime(input);

    res.status(200);
    res.json({
      'Nearest Prime': nearestPrimeValue
    });
  }

  /**
   * Takes a number, checks to see if its neighbours by a value of x are primes.
   * Always chooses the higher prime number of the two if the distance is the same.
   * eg:  
   * num = 10, value = 1: means it checks 9 and 11.
   * num = 11, value = 4: means it checks 7 and 15.
   */
  private nearestPrime = (num: number, value: number = 1): number => {

    // return num (+/-) value if its prime
    if (this.isPrime(num + value)) return num + value;
    else if (this.isPrime(num - value)) return num - value;

    // else recursivly run this function.
    return this.nearestPrime(num, value + 1);
  }

  /**
   * checks to see if a number is a prime number or not.
   */
  private isPrime = (num: number): boolean => {

    if (num === 4) return false;

    const middle: number = Math.ceil(num / 2);

    for (let i = 2; i < middle; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
}

export default new Controller();
