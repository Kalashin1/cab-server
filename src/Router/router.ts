import { Router, Request, Response } from 'express';
import { singupWithEmailAndPassword, login, currentUser, logout, isUserOnline } from '../controllers/auth'
import { createPost, deletePost, editPost, editProfile } from '../controllers/user';
const router = Router()

router.get('/', (_req:Request, res: Response) => {
  res.status(200).json({ message: 'success'})
})

router.post('/signup', singupWithEmailAndPassword)
router.post('/login', login)
router.get('/logout', logout)
router.get('/current-user', currentUser)


router.post('/edit-profile/:uid', isUserOnline, editProfile)

router.post('/post/create', createPost)
router.post('/post/edit', editPost)
router.post('/post/delete', deletePost)
export default router