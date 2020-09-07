import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexroutes from './routes/indexroutes';
import  bebidas from './routes/bebidas';
import  complementos from './routes/complementos';
import  menu from './routes/menu';
import  servicio from './routes/servicio';


class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    
    config(): void{
        this.app.set('port', 5000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {

        this.app.use('/', indexroutes);
        this.app.use('/bebida', bebidas);
        this.app.use('/complemento', complementos);
        this.app.use('/menu', menu);
        this.app.use('/servicio', servicio);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
