import { Router } from 'express'
import { 
  index, 
  create, 
  store, 
  show, 
  edit, 
  update, 
  destroy 
} from '../controllers/computer.controller'

const router = Router()

router.get('/', index)
router.get('/create', create)
router.post('/create', store)
router.get('/:ip/show', show)
router.get('/:ip/edit', edit)
router.put('/:ip/edit', update)
router.delete('/:ip/destroy', destroy)

export default router