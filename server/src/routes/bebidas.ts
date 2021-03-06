import { Router } from 'express';

import BebidaController from '../controllers/Bebidacontroller'

class LogRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.router.get('/', BebidaController.list);
        this.router.get('/:idbebidas',BebidaController.getone);
        this.router.post('/', BebidaController.create);
        this.router.put('/:idbebidas',BebidaController.update);
        this.router.delete('/:idbebidas',BebidaController.delete);
    }

}
const logRoutes = new LogRoutes();
export default logRoutes.router;