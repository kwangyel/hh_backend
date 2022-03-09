import {Router} from 'express';
import publicController from '../controllers/publicController';

const router=Router();

router.post('/create',publicController.create)
// router.get('/get/:id',publicController.retrieveById)
router.get('/get-flat',publicController.getFlat)
router.get('/get-zone',publicController.retrieve_sub_zone)
router.patch('/update',publicController.update)
router.delete('/delete/:id',publicController.delete)

export default router;