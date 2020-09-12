import { Router } from 'express';

import EntregadosController from '../controllers/Entregadoscontroller'

class LogRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.router.get('/', EntregadosController.list);
        this.router.get('/:iddetallepedidos',EntregadosController.getone);
        this.router.post('/', EntregadosController.create);
        this.router.put('/:iddetallepedidos',EntregadosController.update);
        this.router.delete('/:iddetallepedidos',EntregadosController.delete);
    }

}
const logRoutes = new LogRoutes();
export default logRoutes.router;