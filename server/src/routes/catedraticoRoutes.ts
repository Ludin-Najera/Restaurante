import {Router} from 'express';

import catedraticoController from '../controllers/catedraticoController';


class CatedraticoRoutes{

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{

        this.router.get('/',catedraticoController.list);
        this.router.get('/:id',catedraticoController.getOne);
        this.router.post('/',catedraticoController.create);
        this.router.put('/:id',catedraticoController.update);
        this.router.delete('/:id',catedraticoController.delete);
    }
}    

const catedraticoRoutes = new CatedraticoRoutes();
export default catedraticoRoutes.router;