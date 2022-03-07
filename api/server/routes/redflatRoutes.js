import {Router} from 'express';
import redflatController from '../controllers/redflatController';

const router=Router();

router.post('/create',redflatController.create)
router.get('/get/:id',redflatController.retrieveById)
router.get('/get-all/:rid',redflatController.retrieveByRid)
// router.patch('/mark-inactive',redflatController.markInactive)
// router.patch('/mark-active',caseController.markActive)

router.get('/get-zone-stat/:zoneid',redflatController.getZoneStat)
router.get('/get-megazone-stat/:id',redflatController.getMegazoneStat)
router.get('/get-stat',redflatController.flatStat)

router.patch('/update',redflatController.update)
router.delete('/delete',redflatController.delete)

export default router;