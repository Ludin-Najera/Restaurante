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
class InicioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const inicio = yield database_1.default.query('SELECT * FROM Estudiante', (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                }
                else {
                    res.status(200).json(results);
                }
            });
            res.json(inicio);
            res.json({ text: 'Listado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ide } = req.params;
            yield database_1.default.query('UPDATE estudiante SET ? WHERE IdE = ?', [req.body, ide], (error, results) => {
                //if (error) {
                //  console.log(error);
                //  res.status(500).json({status: 'error'});
                //} else {
                //  res.status(200).json(results);
                res.json({ message: 'Registro Actualizado' });
                // }
            });
            //res.json({text: 'Actualizando Registro' + req.params.ide});
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO estudiante set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Registro Creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ide } = req.params;
            yield database_1.default.query('DELETE FROM estudiante WHERE IdE = ?', [ide], (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                }
                else {
                    res.status(200).json(results);
                }
            });
            //        res.json({message: 'Registro Eliminado'});
        });
    }
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const carga = yield database_1.default.query('SELECT * FROM Estudiante WHERE IdE= ?', [id], (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                }
                else {
                    res.status(200).json(results);
                }
            });
            res.json(carga);
            res.json({ text: 'Listado' });
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
const inicioController = new InicioController();
exports.default = inicioController;
