import { Router } from 'express';

import FacturaController from '../controllers/Facturacontroller'

class LogRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.router.get('/', FacturaController.list);
        this.router.get('/:idfactura',FacturaController.getone);
        this.router.post('/', FacturaController.create);
        this.router.put('/:idfactura',FacturaController.update);
        this.router.delete('/:idfactura',FacturaController.delete);
    }

}
const logRoutes = new LogRoutes();
export default logRoutes.router;