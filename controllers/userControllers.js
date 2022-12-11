import bcrypt from "bcrypt";
import Post from "../models/Post.js";
import User from "../models/User.js";

// Update user
export const userUpdate = async (req, res) => {
  if (req.body.id === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(400).json("You can update your account");
  }
};

// Delete user
export const userDelete = async (req, res) => {
  if (req.body.id === req.params.id) {
    try {
      const user = User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
      } catch (error) {
        res.status(400).json(error);
      }
    } catch (error) {
      res.status(404).json("User Not Found");
    }
  } else {
    res.status(500).json("You can delete your account");
  }
};
// Get Single user
export const userGet = async (req, res) => {
  try {
    const find = await User.findById(req.params.id);
    const { password, email, ...others } = find._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(404).json("User Not Found");
  }
};

// Get ALl user
export const userAll = async (req, res) => {
  try {
    const findAll = await User.find();

    res.status(200).json(findAll);
  } catch (error) {
    res.status(404).json(error);
  }
};
