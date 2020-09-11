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
      const {idbebidas}=req.params;
      const {nombre,precio} = req.body;
      const newLink={
        nombre,precio
      };
      pool.query('UPDATE bebidas set ? WHERE idbebidas= ?',[newLink, idbebidas] ,(error) => {
        if (error) {
          console.log(error);
          return res.status(500).json({error});
        } 
      });
          
          res.status(201).json({message: 'bebida fue modificada'});

    }



    public  create (req: Request, res: Response){
      const {nombre,precio} = req.body;
      const newLink={
          nombre,precio
      };
       pool.query('INSERT INTO bebidas set ?', [newLink],(error, results, fields) =>{
       if(error){
         console.log(error);
         return res.status(500).send(error);
       }
         return res.status(200).json('bebida guardada');
      });
    }

    public async delete (req: Request, res: Response): Promise<void>{

        const { idbebidas } = req.params;
        
        await pool.query('DELETE FROM bebidas WHERE idbebidas = ?', [idbebidas], (error, results) => {
            if (error) {
              return res.status(500).json({status: 'error'});
            } 
          });
              res.status(201).json({message: 'bebida eliminada'});
    }



    public async getone (req: Request, res: Response) {

      const {idbebidas}=req.params;
      const carga = await  pool.query('SELECT * FROM bebidas WHERE idbebidas= ?',[idbebidas] ,(error, results) => {
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