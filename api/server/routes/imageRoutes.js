import {Router} from 'express';
import imageController from '../controllers/imageController';

const router=Router();

router.post('/create',imageController.create)
router.get('/get-all/:sid',imageController.retrieveSid)
router.get('/get/:id',imageController.retrieve)
router.patch('/update',imageController.update)
router.delete('/delete/:id',imageController.delete)

export default router;