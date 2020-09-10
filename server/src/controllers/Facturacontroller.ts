import {Request, Response} from 'express';

import pool from '../database'

class FacturaController{

    public async list (req: Request, res: Response){
        const inicio = await pool.query('SELECT * FROM factura', (error, results) => {
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
      const actualiza = await  pool.query('UPDATE factura set ? WHERE idfactura= ?',[req.body,id] ,(error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          //res.status(200).json(results);
        }
      });
      return res.status(200).send('factura fue modificada');

    }

    public  create (req: Request, res: Response){
      const {serie,numerofactura,nit,nombre,status,id,monto} = req.body;
      const newLink={
          serie,numerofactura,nit,nombre,status,id,monto
      };

       pool.query('INSERT INTO factura  set ?', [newLink],(error, results, fields) =>{
       if(error){
         console.log(error);
         return res.status(500).send(error);

       }

       return res.status(200).send('factura guardada');

      });
      

    }

    public async delete (req: Request, res: Response): Promise<void>{

        const { id } = req.params;
        await pool.query('DELETE FROM factura WHERE idfactura = ?', [id], (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error'});
            } else {
              //res.status(200).json(results);
            }
          });
      res.json({message: 'factura eliminada'});
    }

    public async getone (req: Request, res: Response) {

      const {id}=req.params;
      const carga = await  pool.query('SELECT * FROM factura WHERE idfactura= ?',[id] ,(error, results) => {
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

const  facturaController = new FacturaController();
export default facturaController;