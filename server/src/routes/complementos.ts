import { Router } from 'express';

import ComplementosController from '../controllers/Complementoscontroller'

class LogRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.router.get('/', ComplementosController.list);
        this.router.get('/:idcomplementos',ComplementosController.getone);
        this.router.post('/', ComplementosController.create);
        this.router.put('/:idcomplementos',ComplementosController.update);
        this.router.delete('/:idcomplementos',ComplementosController.delete);
    }

}
const logRoutes = new LogRoutes();
export default logRoutes.router;