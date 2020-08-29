"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const iniciocontroller_1 = __importDefault(require("../controllers/iniciocontroller"));
class InRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', iniciocontroller_1.default.list);
        this.router.get('/:id', iniciocontroller_1.default.getone);
        this.router.post('/', iniciocontroller_1.default.create);
        this.router.put('/:ide', iniciocontroller_1.default.update);
        this.router.delete('/:ide', iniciocontroller_1.default.delete);
    }
}
const inRoutes = new InRoutes();
exports.default = inRoutes.router;
