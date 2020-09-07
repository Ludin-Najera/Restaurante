"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Menucontroller_1 = __importDefault(require("../controllers/Menucontroller"));
class LogRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', Menucontroller_1.default.list);
        this.router.get('/:id', Menucontroller_1.default.getone);
        this.router.post('/', Menucontroller_1.default.create);
        this.router.put('/:id', Menucontroller_1.default.update);
        this.router.delete('/:id', Menucontroller_1.default.delete);
    }
}
const logRoutes = new LogRoutes();
exports.default = logRoutes.router;
