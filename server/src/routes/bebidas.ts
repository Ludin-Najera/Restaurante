import { Router } from 'express';

import BebidaController from '../controllers/Bebidacontroller'

class LogRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.router.get('/', BebidaController.list);
        this.router.get('/:id',BebidaController.getone);
        this.router.post('/', BebidaController.create);
        this.router.put('/:id',BebidaController.update);
        this.router.delete('/:id',BebidaController.delete);
    }

}
const logRoutes = new LogRoutes();
export default logRoutes.router;