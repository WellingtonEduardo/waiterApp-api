import { Router } from 'express';
import { CategoryController } from './app/controllers/CategoryController';
import { ProductController } from './app/controllers/ProductController';
import { OrderController } from './app/controllers/OrderController';
import { upload } from './middlewares/upload';

export const router = Router();

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);
router.get('/products', ProductController.index);
router.post('/products', upload.single('image'),ProductController.store);
router.get('/categories/:categoryId/products', CategoryController.show);
router.get('/orders', OrderController.index);
router.post('/orders', OrderController.store);
router.patch('/orders/:orderId', OrderController.update);
router.delete('/orders/:orderId', OrderController.delete);
