import express from 'express';
import { Request, Response } from 'express';
import resizeImageAsync from './../../utilities/imageResizer';
import path from 'path';
import IError from '../../interfaces/IError';

const imagesRoute = express.Router();

imagesRoute.get(
  '/images',
  async function (req: Request, resp: Response, next: (err: IError) => void) {
    try {
      const fileName: string = <string>req.query.fileName;
      const width: number = parseInt(req.query.width as string);
      const height: number = parseInt(req.query.height as string);

      const invalidConfigArray: string[] = [];
      if (Number.isNaN(width)) {
        invalidConfigArray.push('width');
      }

      if (Number.isNaN(height)) {
        invalidConfigArray.push('height');
      }

      if (!fileName) {
        invalidConfigArray.push('fileName');
      }

      const resultStr: string = invalidConfigArray.join(', ');
      if (invalidConfigArray.length > 0) {
        throw Error(`Invalid Query Params passed for ${resultStr}`);
      }

      await resizeImageAsync(fileName, width, height);

      const options = {
        root: path.join(__dirname + `./../../../assets/thumb/`),
      };

      const fileNameWithExtension = fileName + '_thumb.jpg';
      resp.sendFile(fileNameWithExtension, options, function (err): void {
        if (err) {
          console.log(err);
        } else {
          console.log('Sent:', fileNameWithExtension);
        }
      });
    } catch (error) {
      next(error as IError);
    }
  }
);

export default imagesRoute;
