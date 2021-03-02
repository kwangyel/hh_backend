import {Router} from 'express';
import structureController from '../controllers/structureController';

const router=Router();

router.post('/create',structureController.create)
router.get('/get-zone/:id',structureController.retrieveZone)
router.get('/get-json-zone/:id',structureController.getStructureJson)
router.get('/get/:sid',structureController.retrieveSid)
router.patch('/mark-progress',structureController.updateProgress)
router.patch('/mark-complete',structureController.updateComplete)

export default router;