import {Router} from 'express';
import redBuildingController from '../controllers/redBuildingController';
import redBuildingService from '../services/redBuidingService';

const router=Router();

router.post('/create',redBuildingController.create)
router.get('/get',redBuildingController.retrieveAll)
router.get('/get-all',redBuildingController.retrieveAll)
router.get('/get/:id',redBuildingController.retrieveDzo)
router.patch('/unmark',redBuildingController.unmarkRed)
router.patch('/remark',redBuildingController.remarkRed)
router.patch('/update',redBuildingController.update)

router.patch('/red-active',redBuildingController.markRedActive)
router.patch('/red-inactive',redBuildingController.markRedInactive)
router.patch('/red-progress',redBuildingController.markRedProgress)

router.get('/get-flat-zone/:id',redBuildingController.getRedFlatByZoneId)
router.get('/get-flat-mega/:id',redBuildingController.getRedFlatByMegazone)
router.get('/get-zone/:id',redBuildingController.retrieveZone)
router.get('/get-zone-json/:id',redBuildingController.retrieveZoneJson)

router.get('/get-zone-stat/:zoneid',redBuildingController.getZoneStat)
router.get('/get-megazone-stat/:id',redBuildingController.getMegazoneStat)

router.get('/get-all-megazone-stat',redBuildingController.getAllMegazoneStat)

router.get('/get-one/:id',redBuildingController.findById)

router.patch('/remark',redBuildingController.remarkRed)


export default router;