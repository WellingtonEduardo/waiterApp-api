/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { CategoryRepositories } from '../repositories/CategoryRepositories';


class Controller {

  async index(req: Request , res: Response) {
    return await CategoryRepositories.findAll();
  }

  async store(req: Request , res: Response) {
    return await CategoryRepositories.create();

  }

}


export const CategoryController = new Controller();

