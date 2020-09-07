"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        //res.send({text: 'API IS / api/log'})
        res.send({ text: '/bebida' });
    }
}
exports.indexController = new IndexController();
