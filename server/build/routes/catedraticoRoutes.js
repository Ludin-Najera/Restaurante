"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catedraticoController_1 = __importDefault(require("../controllers/catedraticoController"));
class CatedraticoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', catedraticoController_1.default.list);
        this.router.get('/:id', catedraticoController_1.default.getOne);
        this.router.post('/', catedraticoController_1.default.create);
        this.router.put('/:id', catedraticoController_1.default.update);
        this.router.delete('/:id', catedraticoController_1.default.delete);
    }
}
const catedraticoRoutes = new CatedraticoRoutes();
exports.default = catedraticoRoutes.router;
