import { Order } from '../models/Order';
interface CreateProps{
table: string;
products: [
  {
    product: string;
    quantity: number;
  }
]
}

class Repositories {

  async findAll() {
    const orders = await Order.find().populate('products.product').sort({createdAt: 1});
    return orders;

  }

  async create(order:CreateProps) {
    return  await Order.create(order);

  }

  async update({orderId, status}: {orderId: string, status: string}) {
    return await Order.findByIdAndUpdate(orderId, {status});
  }

  async delete(orderId: string) {
    return await Order.findByIdAndDelete(orderId);
  }

}



export const OrderRepositories = new Repositories();
