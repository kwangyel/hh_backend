import {Router} from 'express';
import zoneController from '../controllers/zoneConstoller';

const router=Router();

router.get('/get-mega-zone',zoneController.retrieveMegaZones)
router.get('/get-zone/:id',zoneController.retrieveZones)
router.get('/get-sub-zone/:id',zoneController.retrieveSubzones)
router.get('/get-sub-zone-id/:id',zoneController.getSubzoneById)

export default router;