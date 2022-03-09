import {Router} from 'express';
import dailyStatController from '../controllers/dailyStatController';

const router=Router();

router.get('/populate',dailyStatController.populate)
router.get('/get-all',dailyStatController.getAll)
router.get('/get-date/:date',dailyStatController.findByDate)
router.get('/get-week',dailyStatController.getAllWeek)
router.patch('/update',dailyStatController.update)
router.delete('/delete/:id',dailyStatController.delete)

export default router;