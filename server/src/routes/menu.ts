import { Router } from 'express';

import MenuController from '../controllers/Menucontroller'

class LogRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.router.get('/', MenuController.list);
        this.router.get('/:id',MenuController.getone);
        this.router.post('/', MenuController.create);
        this.router.put('/:id',MenuController.update);
        this.router.delete('/:idmenu',MenuController.delete);
    }

}
const logRoutes = new LogRoutes();
export default logRoutes.router;