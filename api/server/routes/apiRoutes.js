import { Router } from 'express'
import cidController from '../controllers/cidController'

const router = Router()

router.get('/get/:cid',cidController.queryCid)

export default router
