// /controllers/user.controller.js
import User from '../models/user.js';


// GET all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new user
export const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update user
export const updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE user by ID
export const deleteUserById = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
if (!updatedUser) {
  return res.status(404).json({ message: "User not found" });
}
res.json({
  message: "User updated successfully",
  user: updatedUser
});

};

// DELETE all users
export const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany();
    res.json({ message: 'All users deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

