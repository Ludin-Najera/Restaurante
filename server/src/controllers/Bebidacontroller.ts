import {Request, Response} from 'express';

import pool from '../database'

class BebidaController{

    public async list (req: Request, res: Response){
        const inicio = await pool.query('SELECT * FROM bebidas', (error, results) => {
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
      
      const actualiza = await  pool.query('UPDATE bebidas set ? WHERE idbebidas= ?',[req.body,id] ,(error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          //res.status(200).json(results);
        }
      });
      return res.status(200).send('bebida fue modificada');

    }



    public  create (req: Request, res: Response){
      const {nombre,precio} = req.body;
      const newLink={
          nombre,precio
      };

       pool.query('INSERT INTO bebidas  set ?', [newLink],(error, results, fields) =>{
       if(error){
         console.log(error);
         return res.status(500).send(error);

       }

       return res.status(200).send('bebida guardada');

      });
      

    }

    public async delete (req: Request, res: Response): Promise<void>{

        const { idbebidas } = req.params;
        
        await pool.query('DELETE FROM bebidas WHERE idbebidas = ?', [idbebidas], (error, results) => {
            if (!error) {
              return res.status(500).json({status: 'error'});
            } else {
              //return res.status(200).json(results);
            }
          });
      res.json({message: 'bebida eliminada'});
    }

    public async getone (req: Request, res: Response) {

      const {id}=req.params;
      const carga = await  pool.query('SELECT * FROM bebidas WHERE idbebidas= ?',[id] ,(error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
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

    }

}

const  bebidaController = new BebidaController();
export default bebidaController;