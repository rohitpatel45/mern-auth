import User from "../models/user.models.js";
import bcryptjs from 'bcryptjs'

export const signup = async(req, res) => {
  const {username, email, password} = req.body
  const hashedPashword = bcryptjs.hashSync(password, 10)
  
  const newuser = new User({username, email, password:hashedPashword})
  try {
    const user = await newuser.save()
    return res.status(201).json({
      message: "User Created",
      user
    })
  } catch (error) {
    return res.status(500).json(error.message)
  }
 
};
