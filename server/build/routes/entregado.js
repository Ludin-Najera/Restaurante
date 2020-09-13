"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Entregadoscontroller_1 = __importDefault(require("../controllers/Entregadoscontroller"));
class LogRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', Entregadoscontroller_1.default.list);
        this.router.get('/:iddetallepedidos', Entregadoscontroller_1.default.getone);
        this.router.post('/', Entregadoscontroller_1.default.create);
        this.router.put('/:iddetallepedidos', Entregadoscontroller_1.default.update);
        this.router.delete('/:iddetallepedidos', Entregadoscontroller_1.default.delete);
    }
}
const logRoutes = new LogRoutes();
exports.default = logRoutes.router;
