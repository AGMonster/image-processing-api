import { Request, Response } from 'express';
import IError from '../interfaces/IError';

const errorHandler = function (
  error: IError,
  req: Request,
  res: Response,
  next: () => void
) {
  res.send(
    `The following error occured while processing your image remedy and try again: ${error.message}`
  );
  next();
};

export default errorHandler;
