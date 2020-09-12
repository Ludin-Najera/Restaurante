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
class MenuController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const inicio = yield database_1.default.query('SELECT a.idmenu,a.nombre, a.descripcion,a.precio ,c.nombre as bebida, b.nombre as servicio, d.nombre as complemento FROM menu a INNER JOIN tiposervicio b ON a.idtiposervicio=b.idtiposervicio INNER JOIN bebidas c ON a.idbebidas=c.idbebidas INNER JOIN complementos d ON a.idcomplementos=d.idcomplementos', (error, results) => {
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
            const { idmenu } = req.params;
            const { nombre, descripcion, precio, idcomplementos, idbebidas, idtiposervicio } = req.body;
            const actualiza = yield database_1.default.query('UPDATE menu set ? WHERE idmenu= ?', [req.body, idmenu], (error, results) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ error });
                }
            });
            return res.status(200).json('menu fue modificada');
        });
    }
    create(req, res) {
        const { nombre, descripcion, precio, idcomplementos, idbebidas, idtiposervicio } = req.body;
        const newLink = {
            nombre, precio, idcomplementos, idbebidas, idtiposervicio
        };
        database_1.default.query('INSERT INTO menu  set ?', [newLink], (error, results, fields) => {
            if (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            return res.status(200).json('menu guardado');
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idmenu } = req.params;
            yield database_1.default.query('DELETE FROM menu WHERE idmenu = ?', [idmenu], (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                }
            });
            res.status(200).json({ message: 'menu eliminado' });
        });
    }
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idmenu } = req.params;
            const carga = yield database_1.default.query('SELECT a.idmenu,a.nombre, a.descripcion,a.precio ,c.nombre as bebida, b.nombre as servicio FROM menu a INNER JOIN tiposervicio b ON a.idtiposervicio=b.idtiposervicio INNER JOIN bebidas c ON a.idbebidas=c.idbebidas WHERE a.idmenu= ?', [idmenu], (error, results) => {
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
const menuController = new MenuController();
exports.default = menuController;
