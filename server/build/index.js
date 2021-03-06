"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexroutes_1 = __importDefault(require("./routes/indexroutes"));
const bebidas_1 = __importDefault(require("./routes/bebidas"));
const complementos_1 = __importDefault(require("./routes/complementos"));
const menu_1 = __importDefault(require("./routes/menu"));
const servicio_1 = __importDefault(require("./routes/servicio"));
const factura_1 = __importDefault(require("./routes/factura"));
const detalle_1 = __importDefault(require("./routes/detalle"));
const entregado_1 = __importDefault(require("./routes/entregado"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', 5000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexroutes_1.default);
        this.app.use('/bebida', bebidas_1.default);
        this.app.use('/complemento', complementos_1.default);
        this.app.use('/menu', menu_1.default);
        this.app.use('/servicio', servicio_1.default);
        this.app.use('/factura', factura_1.default);
        this.app.use('/detalle', detalle_1.default);
        this.app.use('/entregado', entregado_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
