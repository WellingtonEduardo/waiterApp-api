import { Category } from '../models/Category';




class Repositories {

  async findAll() {
    const categories = await Category.find();
    return categories;
  }

  async create({icon,name}:{icon: string, name: string}) {
    const category = await Category.create({icon,name});
    return category;
  }

}



export const CategoryRepositories = new Repositories();
