import { Router } from 'express'
import { index } from '../controllers/home.controller'

const router = Router()

router.get('/', index)

export default router