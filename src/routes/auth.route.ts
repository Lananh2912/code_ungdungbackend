import { Router } from 'express';
import authController from '../controllers/auth.controller';

const router = Router();

router.get('/login', authController.login);
router.post('/login', authController.loginPost);

router.get('/register', authController.register);
router.post('/register', authController.registerPost);

export default router;
