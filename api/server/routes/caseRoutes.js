import {Router} from 'express';
import caseController from '../controllers/caseController';

const router=Router();

router.post('/create',caseController.create)
router.get('/get',caseController.retrieve)
router.patch('/unmark',caseController.unmarkRed)
router.patch('/update',caseController.update)

export default router;