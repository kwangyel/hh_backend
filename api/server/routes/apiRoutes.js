import { Router } from 'express'
import cidController from '../controllers/cidController'

const router = Router()

router.get('/get-cid/:cid',cidApiController.queryCid)

export default router
