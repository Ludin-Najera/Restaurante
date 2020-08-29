"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logcontroller_1 = __importDefault(require("../controllers/logcontroller"));
class LogRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', logcontroller_1.default.list);
        this.router.get('/:id', logcontroller_1.default.getone);
        this.router.post('/', logcontroller_1.default.create);
        this.router.put('/:id', logcontroller_1.default.update);
        this.router.delete('/:id', logcontroller_1.default.delete);
    }
}
const logRoutes = new LogRoutes();
exports.default = logRoutes.router;
