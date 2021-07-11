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

export const createPost = async (req: Request, res: Response) => {
  const post = req.body;
  // console.log(post)
  try {
    let user = new User()
    const _post = await user.makePost(post);
    res.json(_post)
  } catch (error) {
    console.log(error)
  }
}

export const editPost = async (req: Request, res: Response) => {
  const post = req.body
  try {
    let user = new User()
    const _post = await user.editPost(post)
    res.json(_post)
  } catch (error) {
    console.log(error)
  }
}


export const deletePost = async (req: Request, res: Response) => {
  const post = req.body

  try {
    let user = new User()
    await user.deletePost(post)
    res.json({ message: 'succesful' })
  } catch (error) {
    console.log(error)
  }
}