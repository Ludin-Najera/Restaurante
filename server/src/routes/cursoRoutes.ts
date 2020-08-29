import {Router} from 'express';

import cursoController from '../controllers/cursoController';


class CatedraticoRoutes{

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{

        this.router.get('/',cursoController.list);
        this.router.get('/:id',cursoController.getOne);
        this.router.post('/',cursoController.create);
        this.router.put('/:id',cursoController.update);
        this.router.delete('/:id',cursoController.delete);
    }
}    

const cursosRoutes = new CatedraticoRoutes();
export default cursosRoutes.router;