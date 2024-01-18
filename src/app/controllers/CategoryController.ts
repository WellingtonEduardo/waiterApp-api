/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { CategoryRepositories } from '../repositories/CategoryRepositories';


class Controller {

  async index(req: Request , res: Response) {
    const categories = await CategoryRepositories.findAll();
    return res.json(categories);
  }

  async store(req: Request , res: Response) {
    if (!req.body.icon ||  !req.body.name) {
      res.send('Nâo pode aver campo em branco');
      return;
    }
    const category =   await CategoryRepositories.create(req.body);
    res.send(category);
  }

}


export const CategoryController = new Controller();

