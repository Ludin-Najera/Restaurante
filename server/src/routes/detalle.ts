import { Router } from 'express';

import DetalleController from '../controllers/Detallecontroller'

class LogRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.router.get('/', DetalleController.list);
        this.router.get('/:id',DetalleController.getone);
        this.router.post('/', DetalleController.create);
        this.router.put('/:id',DetalleController.update);
        this.router.delete('/:id',DetalleController.delete);
    }

}
const logRoutes = new LogRoutes();
export default logRoutes.router;