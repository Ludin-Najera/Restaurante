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
class BebidaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const inicio = yield database_1.default.query('SELECT * FROM bebidas', (error, results) => {
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
            const { idbebidas } = req.params;
            const { nombre, precio } = req.body;
            const newLink = {
                nombre, precio
            };
            database_1.default.query('UPDATE bebidas set ? WHERE idbebidas= ?', [newLink, idbebidas], (error) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ error });
                }
            });
            res.status(201).json({ message: 'bebida fue modificada' });
        });
    }
    create(req, res) {
        const { nombre, precio } = req.body;
        const newLink = {
            nombre, precio
        };
        database_1.default.query('INSERT INTO bebidas set ?', [newLink], (error, results, fields) => {
            if (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            return res.status(200).json('bebida guardada');
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idbebidas } = req.params;
            yield database_1.default.query('DELETE FROM bebidas WHERE idbebidas = ?', [idbebidas], (error, results) => {
                if (error) {
                    return res.status(500).json({ status: 'error' });
                }
            });
            res.status(201).json({ message: 'bebida eliminada' });
        });
    }
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idbebidas } = req.params;
            const carga = yield database_1.default.query('SELECT * FROM bebidas WHERE idbebidas= ?', [idbebidas], (error, results) => {
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
            //const { id } = req.params;
            //const inicio = await pool.query('SELECT * FROM estudiante WHERE IdE = ?', [id]);
            //if (inicio.length > 0){
            //  return res.json(inicio[0]);
            // }
            //console.log(inicio);
            //res.json({text: 'Registro encontrado'});
        });
    }
}
const bebidaController = new BebidaController();
exports.default = bebidaController;
