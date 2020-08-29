import { Router } from 'express';

import inicioController from '../controllers/iniciocontroller'

class InRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.router.get('/', inicioController.list);
        this.router.get('/:id', inicioController.getone);
        this.router.post('/', inicioController.create);
        this.router.put('/:ide',inicioController.update);
        this.router.delete('/:ide',inicioController.delete);
    }

}
const inRoutes = new InRoutes();
export default inRoutes.router;