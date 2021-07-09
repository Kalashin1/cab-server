import { Request, Response } from 'express'
import User from '../data/models/user'

export const editProfile = async (req: Request, res: Response) => {
  const { uid } = req.params
  const userParam = req.body
  // console.log(userParam, uid)
  try {
    let user = new User();
    let _user = await user.editProfile(userParam, uid)
    res.json(_user)
  } catch (error) {
    console.log(error);
  }
}