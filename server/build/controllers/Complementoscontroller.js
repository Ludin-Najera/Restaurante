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
class ComplementosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const inicio = yield database_1.default.query('SELECT * FROM complementos', (error, results) => {
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
            const { idcomplementos } = req.params;
            const { nombre, precio } = req.body;
            yield database_1.default.query(`UPDATE bebidas set ? WHERE idcomplementos= ?`, [req.body, idcomplementos], (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ error });
                }
            });
            res.status(201).json({ message: 'complemento fue modificado' });
        });
    }
    create(req, res) {
        const { nombre, precio } = req.body;
        const newLink = {
            nombre, precio
        };
        database_1.default.query('INSERT INTO complementos set ?', [newLink], (error, results, fields) => {
            if (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            return res.status(200).json('complemento guardado');
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idbebidas } = req.params;
            yield database_1.default.query('DELETE FROM complementos WHERE idcomplementos = ?', [idbebidas], (error, results) => {
                if (error) {
                    return res.status(500).json({ status: 'error' });
                }
            });
            res.status(201).json({ message: 'complemento eliminadeo' });
        });
    }
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idbebidas } = req.params;
            yield database_1.default.query('SELECT * FROM complementos WHERE idcomplementos= ?', [idbebidas], (error, results) => {
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
const complementosController = new ComplementosController();
exports.default = complementosController;
