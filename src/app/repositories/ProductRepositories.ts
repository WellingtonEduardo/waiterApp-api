import { Product } from '../models/Product';

class Repositories {

  async findAll() {
    const products =  await Product.find();
    return products;
  }

  async findByCategoryId() {
    return 'ok';
  }

  async create() {
    return 'ok';
  }

}



export const ProductRepositories = new Repositories();
