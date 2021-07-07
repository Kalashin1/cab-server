import { Router, Request, Response } from 'express';
import { singupWithEmailAndPassword, login, currentUser, logout } from '../controllers/auth'
const router = Router()

router.get('/', (_req:Request, res: Response) => {
  res.status(200).json({ message: 'success'})
})

router.post('/signup', singupWithEmailAndPassword)
router.post('/login', login)
router.get('/logout', logout)
router.get('/current-user', currentUser)

export default router