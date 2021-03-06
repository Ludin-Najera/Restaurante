import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { User } from "../entity/User";
import { validate } from 'class-validator';

export class UserController {

    static getAll = async (req: Request, res: Response)=>{
        const userRepository = getRepository(User);
        const users = await userRepository.find();

        if (users.length > 0 ){
            res.send(users);
        }else{
            res.status(404).json({message: 'Not Result'});
        }
    };


    static getById = async (req: Request, res: Response)=>{
        const {id} = req.params;
        const userRepository = getRepository(User);

        try{
            const user = await userRepository.findOneOrFail(id);
            res.send(user);
        }
        catch(e){
            res.status(404).json({message: 'Not result'});
        }

    }; 


    
    static newUser = async (req: Request, res: Response)=>{
        const { username, password, role } = req.body;
        const user = new User();

        user.username = username;
        user.password = password;
        user.role = role;

        //Validaciones
        const errors = await validate(user);

        if (errors.length > 0){
            return res.status(400).json(errors);
        }

        const userRepository = getRepository(User)
        try{
            await userRepository.save(user);
        }
        catch(e){
            return res.status(409).json({message: 'Username already exist'});
        }

        res.status(201).json({message: 'User created'});
        //res.send('User created');

    };


    static editUser = async (req: Request, res: Response)=>{
        let user;
        const {id} = req.params;
        const {username, password, role} = req.body;

        const userRepository = getRepository(User);

        try{
            user = await userRepository.findOneOrFail(id);
            user.username = username;
            user.password = password;
            user.role = role;
        }
        catch(e){
            return res.status(404).json({message: 'User not found'});
        }

        const errors = await validate(user);

        if(errors.length > 0 ){
            return res.status(400).json(errors);
        }

        //Try to save user

        try{
            await userRepository.save(user);
        }
        catch(e){
            return res.status(409).json({message: 'Username already in use'});
        }
        
        res.status(201).json({message: 'User update'});
        

    };


    

    static deleteUser = async (req: Request, res: Response)=>{
        const {id} = req.params;
        const userRepository = getRepository(User);
        let user: User;

        try{
            user = await userRepository.findOneOrFail(id);
        }
        catch(e){
            return res.status(404).json({message: 'User not found'});
        }

        //Remove user

        userRepository.delete(id);
        res.status(201).json({message: 'User deleted'});


    };

}

export default UserController;