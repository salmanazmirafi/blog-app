import Post from "../models/Post.js";

// Crate post
export const postCreate = async (req, res) => {
  const newPost = await Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Update post
export const postUpdate = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatePost);
      } catch (error) {
        res.status(400).json(error);
      }
    } else {
      res.status(404).json("You can update only your post");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

// Delete post
export const postDelete = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been Deleted........");
      } catch (error) {
        res.status(400).json(error);
      }
    } else {
      res.status(404).json("You can Delete only your post");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
// Get Single post
export const postGet = async (req, res) => {
  try {
    const find = await Post.findById(req.params.id);
    res.status(200).json(find);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Get ALl post
export const postAll = async (req, res) => {
  const username = req.query.user;
  const cate = req.query.cate;
  try {
    let post;

    if (username) {
      post = await Post.find({ username });
    } else if (cate) {
      post = await Post.find({
        category: { $in: [cate] },
      });
    } else {
      post = await Post.find();
    }

    res.status(200).json(post);

    res.status(200).json(findAll);
  } catch (error) {
    res.status(400).json(error);
  }
};
