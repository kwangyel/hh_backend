import {Router} from 'express';
import memberController from '../controllers/memberController';

const router=Router();

router.get('/vaccinated-zone/:zoneid',memberController.retrieveVaccinated)
router.get('/members-zone/:zoneid',memberController.retrieveMembers)
router.get('/tested-zone/:zoneid',memberController.retrieveTested)

router.get('/get-member-cid/:cid',memberController.retrieveWithCID)
router.get('/get-member-contact/:contact',memberController.retrieveWithContact)

router.get('/get-household-cid/:cid',memberController.retrieveWithHouseholdCID)
router.get('/get-household-contact/:contact',memberController.retrieveWithHouseholdContact)


export default router;