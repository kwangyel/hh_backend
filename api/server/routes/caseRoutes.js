import {Router} from 'express';
import caseController from '../controllers/caseController';

const router=Router();

router.post('/create',caseController.create)
router.get('/get/:id',caseController.retrieveById)
router.get('/get-all/:rid',caseController.retrieveByRid)
router.patch('/mark-inactive',caseController.markInactive)
router.patch('/mark-active',caseController.markActive)
router.patch('/update',caseController.update)
router.delete('/delete',caseController.delete)

export default router;