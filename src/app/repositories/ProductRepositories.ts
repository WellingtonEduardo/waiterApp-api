import { Product } from '../models/Product';

interface CreateProps {
  name: string,
  description: string,
  price: number,
  ingredients?: {
    name: string,
    icon: string
  },
  category: string,
  imagePath: string
}

class Repositories {

  async findAll() {
    const products = await Product.find();
    return products;
  }



  async create(product: CreateProps) {
    return await Product.create(product);
  }

}



export const ProductRepositories = new Repositories();
