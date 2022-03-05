import { Router } from 'express';

import studentController from '../controllers/student.controller';

const router = Router();

router.get('/', studentController.index);
router.get('/add', studentController.create);
router.post('/add', studentController.store);
router.get('/edit/:id', studentController.edit);
router.post('/edit/:id', studentController.update);
router.post('/delete/:id', studentController.destroy);
router.get('/search', studentController.search);
export default router;
