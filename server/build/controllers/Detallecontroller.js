"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class DetalleController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const inicio = yield database_1.default.query('SELECT a.iddetallepedidos,a.cantidad,d.nombre as menu,d.descripcion,b.nombre as bebida, c.nombre as complementos, a.total, f.status FROM detallepedidos a INNER JOIN bebidas b ON a.idbebidas=b.idbebidas INNER JOIN complementos c ON a.idcomplementos=c.idcomplementos INNER JOIN menu d ON a.idmenu=d.idmenu INNER JOIN factura f ON a.iddetallepedidos=f.idfactura WHERE f.status in(1)', (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                }
                else {
                    res.status(200).json(results);
                }
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { iddetallepedidos } = req.params;
            const { idmenu, idcomplementos, idbebidas, cantidad, total } = req.body;
            const actualiza = yield database_1.default.query('UPDATE detallepedidos set ? WHERE iddetallepedidos= ?', [req.body, iddetallepedidos], (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                }
            });
            return res.status(200).json('detalle fue modificado');
        });
    }
    create(req, res) {
        const { idmenu, idcomplementos, idbebidas, cantidad, total } = req.body;
        const newLink = {
            idmenu, idcomplementos, idbebidas, cantidad, total
        };
        database_1.default.query('INSERT INTO detallepedidos  set ?', [newLink], (error, results, fields) => {
            if (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            return res.status(200).json('detalle guardado');
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { iddetallepedidos } = req.params;
            yield database_1.default.query('DELETE FROM detallepedidos WHERE iddetallepedidos = ?', [iddetallepedidos], (error, results) => {
                if (error) {
                    res.status(500).json({ status: 'error' });
                }
            });
            res.json({ message: 'detalle eleminado' });
        });
    }
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { iddetallepedidos } = req.params;
            const carga = yield database_1.default.query('SELECT a.iddetallepedidos,a.cantidad,d.nombre as menu,b.nombre as bebida, c.nombre as complementos, a.total FROM detallepedidos a INNER JOIN bebidas b ON a.idbebidas=b.idbebidas INNER JOIN complementos c ON a.idcomplementos=c.idcomplementos INNER JOIN menu d ON a.idmenu=d.idmenu WHERE iddetallepedidos= ?', [iddetallepedidos], (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                }
                else {
                    res.status(200).json(results);
                }
            });
            //res.json(carga);
            //res.json({text: 'Listado'});
        });
    }
}
const detalleController = new DetalleController();
exports.default = detalleController;
