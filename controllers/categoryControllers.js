import Category from "../models/Category.js";

// Crate Category
export const categoryCreate = async (req, res) => {
  try {
    const category = new Category(req.body);
    const save = await category.save()
    res.status(201).json(save);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Update Category
export const categoryUpdate = async (req, res) => {
  res.send("HI");
};

// Delete Category
export const categoryDelete = async (req, res) => {
  res.send("HI");
};

// Get ALl Category
export const categoryAll = async (req, res) => {
  try {
    const all = await Category.find()
    res.status(200).json(all)
  } catch (error) {
    
  }
};
