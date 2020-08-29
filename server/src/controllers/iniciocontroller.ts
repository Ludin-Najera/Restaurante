import {Request, Response} from 'express';

import pool from '../database'

class InicioController{

    public async list (req: Request, res: Response){
        const inicio = await pool.query('SELECT * FROM Estudiante', (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error'});
            } else {
              res.status(200).json(results);
            }
          });
        res.json(inicio);
        res.json({text: 'Listado'});

    }

    public async update (req: Request, res: Response): Promise<void>{
        const { ide } = req.params;
        await pool.query('UPDATE estudiante SET ? WHERE IdE = ?', [req.body, ide], (error, results) => {
            //if (error) {
            //  console.log(error);
            //  res.status(500).json({status: 'error'});
            //} else {
            //  res.status(200).json(results);
              res.json({message: 'Registro Actualizado'})
           // }
          });

        //res.json({text: 'Actualizando Registro' + req.params.ide});

    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO estudiante set ?', [req.body],);
        console.log(req.body);
        res.json({message: 'Registro Creado'});
    }

    public async delete (req: Request, res: Response): Promise<void>{

        const { ide } = req.params;
        await pool.query('DELETE FROM estudiante WHERE IdE = ?', [ide], (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error'});
            } else {
              res.status(200).json(results);
            }
          });
//        res.json({message: 'Registro Eliminado'});
    }

    public async getone (req: Request, res: Response) {

      const {id}=req.params;
      const carga = await  pool.query('SELECT * FROM Estudiante WHERE IdE= ?',[id] ,(error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      });
      res.json(carga);
      res.json({text: 'Listado'});

        //const { id } = req.params;
        //const inicio = await pool.query('SELECT * FROM estudiante WHERE IdE = ?', [id]);
        //if (inicio.length > 0){
          //  return res.json(inicio[0]);
       // }
        //console.log(inicio);
        //res.json({text: 'Registro encontrado'});

    }

}

const inicioController = new InicioController();
export default inicioController;