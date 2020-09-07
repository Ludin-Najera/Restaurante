import {Request, Response} from 'express';

import pool from '../database'

class ServicioController{

    public async list (req: Request, res: Response){
        const inicio = await pool.query('SELECT * FROM tiposervicio', (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error'});
            } else {
              res.status(200).json(results);
            }
          });
    }

    public async update (req: Request, res: Response){
      const {id}=req.params;
      const actualiza = await  pool.query('UPDATE tiposervicio set ? WHERE idtiposervicio= ?',[req.body,id] ,(error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      });
      return res.status(200).send('servicio fue modificada');

    }

    public  create (req: Request, res: Response){
      const {nombre} = req.body;
      const newLink={
          nombre
      };

       pool.query('INSERT INTO tiposervicio  set ?', [newLink],(error, results, fields) =>{
       if(error){
         console.log(error);
         return res.status(500).send(error);

       }

       return res.status(200).send('servicio guardado');

      });
      

    }

    public async delete (req: Request, res: Response): Promise<void>{

        const { id } = req.params;
        await pool.query('DELETE FROM servicio WHERE idtiposervicio = ?', [id], (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error'});
            } else {
              res.status(200).json(results);
            }
          });
      res.json({message: 'servicio eliminado'});
    }

    public async getone (req: Request, res: Response) {

      const {id}=req.params;
      const carga = await  pool.query('SELECT * FROM tiposervicio WHERE idtiposervicio= ?',[id] ,(error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      });
      //res.json(carga);
      //res.json({text: 'Listado'});

    }

}

const  servicioController = new ServicioController();
export default servicioController;