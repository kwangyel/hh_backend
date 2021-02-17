import {Router} from 'express';
import householdController from '../controllers/householdController';

const router=Router();

router.post('/create',householdController.create)
router.get('/get-all/:sid',householdController.retrieveSid)
router.get('/get/:id',householdController.retrieve)
router.patch('/update',householdController.update)
router.delete('/delete/:id',householdController.delete)

export default router;