/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { OrderRepositories } from '../repositories/OrderRepositories';


class Controller {

  async index(req: Request , res: Response) {
    return await OrderRepositories.findAll();
  }

  async store(req: Request , res: Response) {
    return await OrderRepositories.create();
  }


  async update(req: Request, res: Response) {
    return await OrderRepositories.update();
  }

  async delete(req: Request, res: Response) {
    return await OrderRepositories.delete();
  }

}


export const OrderController = new Controller();

