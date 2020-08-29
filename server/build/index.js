"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexroutes_1 = __importDefault(require("./routes/indexroutes"));
const inroutes_1 = __importDefault(require("./routes/inroutes"));
const catedraticoRoutes_1 = __importDefault(require("./routes/catedraticoRoutes"));
const cursoRoutes_1 = __importDefault(require("./routes/cursoRoutes"));
const asignacionRoutes_1 = __importDefault(require("./routes/asignacionRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexroutes_1.default);
        this.app.use('/inicio', inroutes_1.default);
        this.app.use('/api/catedratico', catedraticoRoutes_1.default);
        this.app.use('/api/curso', cursoRoutes_1.default);
        this.app.use('/api/asignacion', asignacionRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
