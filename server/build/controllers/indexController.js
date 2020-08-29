"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.send('Bienvenido');
        res.json({ text: 'API IS / api/catedratico' });
        res.json({ text: 'API IS / api/curso' });
        res.json({ text: 'API IS / api/asignacion' });
    }
}
exports.indexController = new IndexController();
