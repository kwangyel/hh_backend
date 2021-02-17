import {Router} from 'express';
import zoneController from '../controllers/zoneConstoller';

const router=Router();

router.get('/get-zone/:id',zoneController.retrieveZones)
router.get('/get-sub-zone/:id',zoneController.retrieveSubzones)

export default router;