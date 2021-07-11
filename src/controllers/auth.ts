
import { NextFunction, Request, Response } from 'express';
import User from '../data/models/user'

export const singupWithEmailAndPassword = async (req: Request, res: Response) => {
  const { email, password, displayName, phoneNumber } = req.body;
  try {
    const user = new User()
    const newUser = await user.signupWithEmailAndPassword({ email, password, displayName, phoneNumber })
    res.json(newUser)
  } catch (err) {
    console.log(err)
  }
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  // console.log(email, password);
  try {
    const user = new User();
    const loggedInUser = await user.login(email, password);
    res.json(loggedInUser)
  } catch (error) {
    console.log(error)
  }
}

export const logout = async (_req: Request, res: Response) => {
  try {
    const user = new User();
    await user.logout();
    res.json({ message: 'Logout successful'})
  } catch (error) {
    console.log(error)
  }
}

export const currentUser = async (_req: Request, res: Response) => {
  const user = new User()
  const loggedInUser = await user.currentUser()
  if (loggedInUser) {
    res.json(loggedInUser)
  } else {
    res.status(400).json({ message: 'User is Not logged in'})
  }
}

export const isUserOnline = async (_req: Request, res: Response, next: NextFunction) => {
  const user = new User()
  const loggedInUser = await user.currentUser()
  if (loggedInUser) {
    next()
  } else {
    res.status(400).json({ message: 'User is Not logged in' })
  }
}