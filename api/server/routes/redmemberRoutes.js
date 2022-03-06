import {Router} from 'express';
import redmemberController from '../controllers/redmemberController';

const router=Router();

router.post('/create',redmemberController.create)
router.get('/get-all/:id',redmemberController.retrieveByFlatId)
router.patch('/update',redmemberController.update)
router.delete('/delete',redmemberController.delete)

export default router;