import { NextFunction, Request, Response } from 'express';

import service from './service';


async function listContinentsByCode(req: Request, res: Response, next: NextFunction) {
  try {
    await service.listContinentsByCode(false, (data) => {
      res.status(200).send(data);
    });
  } catch (err) {
    next(err);
  }
}
async function listContinentsByCodeJSON(req: Request, res: Response, next: NextFunction) {
  try {
    await service.listContinentsByCode(true, (data) => {
      res.status(200).send(data);
    });
  } catch (err) {
    next(err);
  }
}

async function listContrysByCode(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await service.listContrysByCode(false, (data) => { 
      res.status(200).send(data);
    });
  } catch (err) {
    next(err);
  }
}

async function listContrysByCodeJSON(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await service.listContrysByCode(true, (data) => {
      res.status(200).send(data);
    });
  } catch (err) {
    next(err);
  }
}


export default {
  listContinentsByCode,
  listContinentsByCodeJSON,
  listContrysByCode,
  listContrysByCodeJSON,
};
