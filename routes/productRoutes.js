import express from 'express'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController'

const router = express.Router()

router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);

export default router


