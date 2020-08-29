"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursoController_1 = __importDefault(require("../controllers/cursoController"));
class CatedraticoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cursoController_1.default.list);
        this.router.get('/:id', cursoController_1.default.getOne);
        this.router.post('/', cursoController_1.default.create);
        this.router.put('/:id', cursoController_1.default.update);
        this.router.delete('/:id', cursoController_1.default.delete);
    }
}
const cursosRoutes = new CatedraticoRoutes();
exports.default = cursosRoutes.router;
