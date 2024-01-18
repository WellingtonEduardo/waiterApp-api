import { Order } from '../models/Order';

class Repositories {

  async findAll() {
    const orders = await Order.find();
    return orders;
  }

  async create() {
    return 'ok';
  }

  async update() {
    return 'ok';
  }

  async delete() {
    return 'ok';
  }

}



export const OrderRepositories = new Repositories();
