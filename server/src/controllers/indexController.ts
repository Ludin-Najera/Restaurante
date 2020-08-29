import {Request, Response} from 'express';

class IndexController{

    public index (req: Request, res: Response) {

        res.send('Bienvenido')
        res.json({text: 'API IS / api/catedratico'});
        res.json({text: 'API IS / api/curso'});
        res.json({text: 'API IS / api/asignacion'});

    }

}

export const indexController = new IndexController();