import {Router} from 'express';
import buildingController from '../controllers/buildingController';

const router=Router();

router.post('/create',buildingController.create)
router.get('/get/:sid',buildingController.retrieve_sid)
router.patch('/update',buildingController.update)
router.delete('/delete',buildingController.delete)

export default router;