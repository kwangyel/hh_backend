import {Router} from 'express';
import caseController from '../controllers/caseController';
import memberController from '../controllers/memberController';
import redBuildingController from '../controllers/redBuildingController';

const router=Router();

router.get('/vaccinated-zone/:zoneid',memberController.retrieveVaccinated)
router.get('/members-zone/:zoneid',memberController.retrieveMembers)
router.get('/tested-zone/:zoneid',memberController.retrieveTested)

router.get('/get-member-cid/:cid',memberController.retrieveWithCID)
router.get('/get-member-contact/:contact',memberController.retrieveWithContact)

router.get('/get-household-cid/:cid',memberController.retrieveWithHouseholdCID)
router.get('/get-household-contact/:contact',memberController.retrieveWithHouseholdContact)

router.get('/get-owner-cid/:cid',memberController.retrieveWithOwnerCID)
router.get('/get-owner-contact/:contact',memberController.retrieveWithOwnerContact)


router.get('/red-building/:dzoId',redBuildingController.redBuildingCount);
router.get('/case/:dzoId',caseController.caseCount);


export default router;