import express from 'express';
const router = express.Router();
import {
  registerUser,
  loginUser,
  getUserProfile,
} from '../backend/controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile); // Protected route

export default router;