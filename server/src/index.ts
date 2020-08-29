import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexroutes from './routes/indexroutes';
import inroutes from './routes/inroutes';
import catedraticoRoutes from './routes/catedraticoRoutes';
import cursoRoutes from './routes/cursoRoutes';
import asigacionRoutes from './routes/asignacionRoutes';

class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    
    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {

        this.app.use('/', indexroutes);
        this.app.use('/inicio', inroutes);
        this.app.use('/api/catedratico',catedraticoRoutes);
        this.app.use('/api/curso',cursoRoutes);
        this.app.use('/api/asignacion',asigacionRoutes);


    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
