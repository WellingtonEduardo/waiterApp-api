/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { CategoryRepositories } from '../repositories/CategoryRepositories';


class Controller {

  async index(req: Request, res: Response) {
    try {
      const categories = await CategoryRepositories.findAll();
      return res.json(categories);
    } catch (error) {
      res.status(500).json({ error});
    }
  }


  async store(req: Request, res: Response) {
    try {
      const {icon, name} = req.body;
      if(!icon || !name){
        return res.status(400).json({error: 'icon and name are required'});
      }
      await CategoryRepositories.create({icon, name});

      res.status(201).send('success');
    } catch (error) {
      res.status(500).json({ error});
    }

  }


  async show(req: Request, res: Response) {
    try {
      const { categoryId } = req.params;

      if (!categoryId) {
        return res.status(400).json({error:'CategoryId is required'});
      }
      const product = await CategoryRepositories.findByCategoryId(categoryId);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error});
    }
  }


}


export const CategoryController = new Controller();

