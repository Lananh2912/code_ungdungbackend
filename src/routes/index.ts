import { Router } from 'express';

import studentRoute from './student.route';
import authRoute from './auth.route';

const router = Router();

router.use('/students', studentRoute);
router.use('/auth', authRoute);

export default router;
