import { ProductRepositories } from './../repositories/ProductRepositories';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';



class Controller {

  async index(req: Request, res: Response) {
    try {
      const products = await ProductRepositories.findAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error});
    }
  }


  async store(req: Request, res: Response) {
    try {
      const { name, description, price, ingredients, category } = req.body;
      const imagePath = req.file?.filename;

      if (!name || !description || !price || !category || !imagePath) {
        return res.status(404).json({ error: 'The fields are required'});
      }
      const product = {
        name,
        description,
        price: Number(price),
        ingredients: ingredients && JSON.parse(ingredients),
        category,
        imagePath
      };
      await ProductRepositories.create(product);

      res.status(201).send('success');

    } catch (error) {
      res.status(500).json({ error});
    }
  }

}


export const ProductController = new Controller();

