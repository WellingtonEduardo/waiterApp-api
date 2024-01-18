/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { ProductRepositories } from '../repositories/ProductRepositories';


class Controller {

  async index(req: Request , res: Response) {
    const products = await ProductRepositories.findAll();
    return res.json(products);
  }

  async show(req: Request , res: Response) {
    await ProductRepositories.findByCategoryId();
    res.send(req.params.categoryId);
  }

  async store(req: Request , res: Response) {
    return await ProductRepositories.create();
  }

}


export const ProductController = new Controller();

