import {Router} from 'express';
import sealhistoryController from '../controllers/sealhistoryController';

const router=Router();

router.post('/create',sealhistoryController.create)
router.get('/get-all/:id',sealhistoryController.retrieveByFlatId)
router.patch('/update',sealhistoryController.update)
router.post('/delete',sealhistoryController.delete)

export default router;