import { Product } from '../models/Product';
import { Category } from './../models/Category';
class Repositories {

  async findAll() {
    const categories = await Category.find();
    return categories;
  }

  async create({icon,name}:{icon: string, name: string}) {
    const category = await Category.create({icon,name});
    return category;
  }


  async findByCategoryId(categoryId: string) {
    return await Product.find().where('category').equals(categoryId);
  }


}



export const CategoryRepositories = new Repositories();
