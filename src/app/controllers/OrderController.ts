/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { OrderRepositories } from '../repositories/OrderRepositories';


class Controller {

  async index(req: Request , res: Response) {
    try {
      const orders = await OrderRepositories.findAll();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error});
    }
  }

  async store(req: Request , res: Response) {
    try {
      const {table , products} = req.body;

      if (!table || !products) {
        return res.status(404).json({error: 'Table and products fields are required!'});
      }
      await OrderRepositories.create({table , products});
      res.status(201).send('success');
    } catch (error) {
      res.status(500).json({ error});
    }
  }


  async update(req: Request, res: Response) {
    try {
      const {orderId} = req.params;
      const {status} = req.body;

      if (!orderId || !status) {
        return res.status(404).json({error: 'OrderId and status fields are required!'});
      }
      await OrderRepositories.update({orderId, status});
      res.status(200).send('success');
    } catch (error) {
      res.status(500).json({ error});
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const {orderId} = req.params;

      if (!orderId) {
        return res.status(400).json({error: 'OrderId is required!'});
      }

      await OrderRepositories.delete(orderId);
      res.status(204).send('success');
    } catch (error) {
      res.status(500).json({ error});
    }
  }

}


export const OrderController = new Controller();

