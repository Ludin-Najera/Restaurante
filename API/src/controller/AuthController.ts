import { getRepository } from "typeorm";
import { Request, Response } from 'express';
import { User } from '../entity/User';
import router from "../routes/auth";



class AuthController {

    static login = async (req: Request, res: Response)=> {
        const {username, password} = req.body;

        if (!(username && password)){
            return res.status(400).json({message: 'Username & Password are requireed!'});
        }

        const userRepository = getRepository(User);
        let user: User;

        try{
            user = await userRepository.findOneOrFail({ where:{username}});
        }
        catch(e){
            return res.status(400).json({message: 'Username or password incorrect!'})
        }

        res.send(user);

        //return res.json({message: 'Bienvenido!'})
        


    };
}

export default AuthController;