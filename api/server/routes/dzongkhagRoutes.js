import {Router} from 'express';
import dzongkhagController from '../controllers/dzongkhagController';

const router=Router();

router.get('/get-all',dzongkhagController.retrieveAll)

export default router;