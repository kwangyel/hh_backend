import {Router} from 'express';
import searchController from '../controllers/searchController';

const router=Router();

router.post('/search-contact',searchController.searchContact)
router.post('/search-cid',searchController.searchCid)

export default router;