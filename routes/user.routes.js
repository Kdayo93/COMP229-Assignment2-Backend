import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
  deleteAllUsers
} from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUserById);
userRouter.delete('/', deleteAllUsers);

export { userRouter };

