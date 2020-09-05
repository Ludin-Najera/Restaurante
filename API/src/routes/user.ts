import { Router } from 'express';

import { UserController } from './../controller/UserController';


const router = Router();

//Get all users
router.get('/', UserController.getAll);

//Get one users
router.get('/:id', UserController.getById);

//Create a new user
router.post('/', UserController.newUser);

//Edit users
router.patch('/:id', UserController.editUser);

//Delete users
router.delete('/:id', UserController.deleteUser);

export default router;
