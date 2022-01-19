import {Router} from 'express';
import caseController from '../controllers/caseController';

const router=Router();

router.post('/create',caseController.create)
router.get('/get/:id',caseController.retrieveById)
router.get('/get-all/:rid',caseController.retrieveByRid)
router.patch('/markInactive',caseController.markInactive)
router.patch('/markActive',caseController.markActive)
router.patch('/update',caseController.update)
router.delete('/delete',caseController.delete)

export default router;