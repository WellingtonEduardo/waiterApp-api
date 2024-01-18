/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { ProductRepositories } from '../repositories/ProductRepositories';


class Controller {

  async index(req: Request , res: Response) {
    return await ProductRepositories.findAll();
  }

  async show(req: Request , res: Response) {
    return await ProductRepositories.findByCategoryId();
  }

  async store(req: Request , res: Response) {
    return await ProductRepositories.create();
  }

}


export const ProductController = new Controller();

