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
  const {idcomplementos}=req.params;
  const {nombre,precio} = req.body;
  await pool.query(`UPDATE bebidas set ? WHERE idcomplementos= ?`,[req.body, idcomplementos] ,(error, result) => {
    if (error) {
      console.log(error); 
      return res.status(500).json({error});
    } 
  });
      
      res.status(201).json({message: 'complemento fue modificado'});

}



public  create (req: Request, res: Response){
  const {nombre,precio} = req.body;
  const newLink={
      nombre,precio
  };
   pool.query('INSERT INTO complementos set ?', [newLink],(error, results, fields) =>{
   if(error){
     console.log(error);
     return res.status(500).send(error);
   }
     return res.status(200).json('complemento guardado');
  });
}

public async delete (req: Request, res: Response): Promise<void>{

    const { idbebidas } = req.params;
    
    await pool.query('DELETE FROM complementos WHERE idcomplementos = ?', [idbebidas], (error, results) => {
        if (error) {
          return res.status(500).json({status: 'error'});
        } 
      });
          res.status(201).json({message: 'complemento eliminadeo'});
}



public async getone (req: Request, res: Response) {

  const {idbebidas}=req.params;
  await  pool.query('SELECT * FROM complementos WHERE idcomplementos= ?',[idbebidas] ,(error, results) => {
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