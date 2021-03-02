import {Router} from 'express';
import memberController from '../controllers/memberController';

const router=Router();

router.post('/create-bulk',memberController.createBulk)
router.get('/get-all/:sid',memberController.retrieveHid)
router.get('/get/:id',memberController.retrieve)
router.patch('/update',memberController.update)
router.delete('/delete/:id',memberController.delete)

export default router;