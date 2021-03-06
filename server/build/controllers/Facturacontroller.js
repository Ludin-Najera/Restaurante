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
class FacturaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const inicio = yield database_1.default.query('SELECT * FROM factura', (error, results) => {
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
            const { idfactura } = req.params;
            const { serie, numerofactura, nit, nombre, status, monto, id, iddetallepedidos } = req.body;
            const actualiza = yield database_1.default.query('UPDATE factura set ? WHERE idfactura= ?', [req.body, idfactura], (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                }
            });
            return res.status(200).json('factura fue modificada');
        });
    }
    create(req, res) {
        const { serie, numerofactura, nit, nombre, status, id, monto, iddetallepedidos } = req.body;
        const newLink = {
            serie, numerofactura, nit, nombre, status, monto, id, iddetallepedidos
        };
        database_1.default.query('INSERT INTO factura  set ?', [newLink], (error, results, fields) => {
            if (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            return res.status(200).json('factura guardada');
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idfactura } = req.params;
            yield database_1.default.query('DELETE FROM factura WHERE idfactura = ?', [idfactura], (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                }
            });
            res.json({ message: 'factura eliminada' });
        });
    }
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idfactura } = req.params;
            const carga = yield database_1.default.query('SELECT * FROM factura WHERE idfactura= ?', [idfactura], (error, results) => {
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
const facturaController = new FacturaController();
exports.default = facturaController;
