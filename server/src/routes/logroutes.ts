import { Router } from 'express';

import logController from '../controllers/logcontroller'

class LogRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.router.get('/', logController.list);
        this.router.get('/:id', logController.getone);
        this.router.post('/', logController.create);
        this.router.put('/:ide',logController.update);
        this.router.delete('/:ide',logController.delete);
    }

}
const logRoutes = new LogRoutes();
export default logRoutes.router;