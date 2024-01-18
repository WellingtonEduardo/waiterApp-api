import { Category } from '../models/Category';




class Repositories {

  async findAll() {
    const categories = await Category.find();
    return categories;
  }

  async create() {
    return 'ok';
  }

}



export const CategoryRepositories = new Repositories();
