import express from 'express';
const router = express.Router();
import {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} from '../backend/controllers/categoryController.js';
import { protect, admin } from '../middleware/authMiddleware.js'; // Authentication Middleware

router.route('/').get(getCategories).post(protect, admin, createCategory);
router.route('/:id')
    .get(getCategoryById)
    .put(protect, admin, updateCategory)
    .delete(protect, admin, deleteCategory);

export default router;