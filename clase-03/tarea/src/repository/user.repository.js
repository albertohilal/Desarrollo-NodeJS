import User from '../models/User.js';

export const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

export const getAllUsers = async () => {
  return await User.find();
};

export const getUserById = async (id) => {
  return await User.findById(id);
};

export const updateUserById = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true });
};

export const deleteUserById = async (id) => {
  return await User.findByIdAndDelete(id);
};