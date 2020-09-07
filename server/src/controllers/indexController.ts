import {Request, Response} from 'express';

class IndexController{

    public index (req: Request, res: Response) {

        //res.send({text: 'API IS / api/log'})
        res.send({text: '/bebida'})

    }

}

export const indexController = new IndexController();