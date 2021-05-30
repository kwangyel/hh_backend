import {Router} from 'express';
import memberController from '../controllers/memberController';

const router=Router();

router.get('/vaccinated-zone/:zoneid',memberController.retrieveVaccinated)
router.get('/members-zone/:zoneid',memberController.retrieveMembers)
router.get('/tested-zone/:zoneid',memberController.retrieveTested)

export default router;