/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { CategoryRepositories } from '../repositories/CategoryRepositories';


class Controller {

  async index(req: Request , res: Response) {
    const categories = await CategoryRepositories.findAll();
    return res.json(categories);
  }

  async store(req: Request , res: Response) {
    await CategoryRepositories.create();
    res.send('ok');
  }

}


export const CategoryController = new Controller();

