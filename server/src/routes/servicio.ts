import { Router } from 'express';

import ServicioController from '../controllers/Serviciocontroller'

class LogRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.router.get('/', ServicioController.list);
        this.router.get('/:idtiposervicio',ServicioController.getone);
        this.router.post('/', ServicioController.create);
        this.router.put('/:idtiposervicio',ServicioController.update);
        this.router.delete('/:idtiposervicio',ServicioController.delete);
    }

}
const logRoutes = new LogRoutes();
export default logRoutes.router;