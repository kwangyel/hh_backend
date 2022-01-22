import {Router} from 'express';
import convertController from '../controllers/convertController';

const router=Router();

router.get('/str/csv/:zoneId',convertController.findStrCsvZones)
router.get('/building/csv/:zoneId',convertController.findBldgCsvZones)
router.get('/household/csv/:zoneId',convertController.findHhCsvZones)
router.get('/member/csv/:zoneId',convertController.findMemberCsvZones)

export default router;