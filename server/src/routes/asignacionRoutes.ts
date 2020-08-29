import {Router} from 'express';

import asignacionController from '../controllers/asignacionController';


class CatedraticoRoutes{

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{

        this.router.get('/',asignacionController.list);
        this.router.get('/:id',asignacionController.getOne);
        this.router.post('/',asignacionController.create);
        this.router.put('/:id',asignacionController.update);
        this.router.delete('/:id',asignacionController.delete);
    }
}    

const asignacionRoutes = new CatedraticoRoutes();
export default asignacionRoutes.router;