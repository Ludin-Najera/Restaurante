import { Router } from 'express';

import FacturaController from '../controllers/Facturacontroller'

class LogRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.router.get('/', FacturaController.list);
        this.router.get('/:id',FacturaController.getone);
        this.router.post('/', FacturaController.create);
        this.router.put('/:id',FacturaController.update);
        this.router.delete('/:id',FacturaController.delete);
    }

}
const logRoutes = new LogRoutes();
export default logRoutes.router;