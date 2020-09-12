import { Router } from 'express';

import MenuController from '../controllers/Menucontroller'

class LogRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.router.get('/', MenuController.list);
        this.router.get('/:idmenu',MenuController.getone);
        this.router.post('/', MenuController.create);
<<<<<<< HEAD
        this.router.put('/:idmenu',MenuController.update);
=======
        this.router.put('/:id',MenuController.update);
>>>>>>> 45849353a291353fef7466bba1b80933d42be9e4
        this.router.delete('/:idmenu',MenuController.delete);
    }

}
const logRoutes = new LogRoutes();
export default logRoutes.router;