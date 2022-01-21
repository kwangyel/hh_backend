import {Router} from 'express';
import convertController from '../controllers/convertController';

const router=Router();

router.get('/get/:dzoId',convertController.findKmlDzo)

export default router;