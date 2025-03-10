import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
} from '../backend/controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js'; //Authentication Middleware

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById);
// Add routes for updating and deleting products (admin only)

export default router;