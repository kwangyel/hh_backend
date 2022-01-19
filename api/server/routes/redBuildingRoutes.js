import {Router} from 'express';
import redBuildingController from '../controllers/redBuildingController';
import redBuildingService from '../services/redBuidingService';

const router=Router();

router.post('/create',redBuildingController.create)
router.get('/get',redBuildingController.retrieve)
router.get('/get-all',redBuildingController.retrieveAll)
router.get('/get/:id',redBuildingController.retrieveDzo)
router.patch('/unmark',redBuildingController.unmarkRed)
router.patch('/remark',redBuildingController.remarkRed)
router.patch('/update',redBuildingController.update)

export default router;