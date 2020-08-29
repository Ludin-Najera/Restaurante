import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexroutes from './routes/indexroutes';
import logroutes from './routes/logroutes';


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
        this.app.use('/api/log', logroutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
