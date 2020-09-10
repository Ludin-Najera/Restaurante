import {Request, Response} from 'express';

import pool from '../database'

class ComplementosController{

    public async list (req: Request, res: Response){
        const inicio = await pool.query('SELECT * FROM complementos', (error, results) => {
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
      const actualiza = await  pool.query('UPDATE complementos set ? WHERE idcomplementos= ?',[req.body,id] ,(error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
         // res.status(200).json(results);
        }
      });
      return res.status(200).send('complemento fue modificada');

    }

    public  create (req: Request, res: Response){
      const {nombre,precio} = req.body;
      const newLink={
          nombre,precio
      };

       pool.query('INSERT INTO complementos  set ?', [newLink],(error, results, fields) =>{
       if(error){
         console.log(error);
         return res.status(500).send(error);

       }

       return res.status(200).send('complemento guardado');

      });
      

    }

    public async delete (req: Request, res: Response): Promise<void>{

        const { id } = req.params;
        await pool.query('DELETE FROM complementos WHERE idcomplementos = ?', [id], (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error'});
            } else {
             // res.status(200).json(results);
            }
          });
      res.json({message: 'complemento eliminado'});
    }

    public async getone (req: Request, res: Response) {

      const {id}=req.params;
      const carga = await  pool.query('SELECT * FROM complementos WHERE idcomplementos= ?',[id] ,(error, results) => {
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

const  complementosController = new ComplementosController();
export default complementosController;