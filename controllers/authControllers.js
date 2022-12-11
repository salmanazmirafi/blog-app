import bcrypt from "bcrypt";
import User from "../models/User.js";
// Signup
export const createAuth = async (req, res) => {
  try {
    const slat = await bcrypt.genSalt(10);
    const bcryptPW = await bcrypt.hash(req.body.password, slat);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcryptPW,
      
    });
    const saveUser = await user.save();
    res.status(201).json({
      saveUser,
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

// Login
export const loginAuth = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(404).json("Wrong Credential");

    const camper = await bcrypt.compare(req.body.password, user.password);
    !camper && res.status(400).json("Wrong User or Password");

    const { password,email, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};
