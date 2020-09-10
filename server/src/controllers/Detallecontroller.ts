import {Request, Response} from 'express';

import pool from '../database'

class DetalleController{

    public async list (req: Request, res: Response){
        const inicio = await pool.query('SELECT a.iddetallepedidos,a.cantidad,d.nombre as menu,b.nombre as bebida, c.nombre as complementos, a.total FROM detallepedidos a INNER JOIN bebidas b ON a.idbebidas=b.idbebidas INNER JOIN complementos c ON a.idcomplementos=c.idcomplementos INNER JOIN menu d ON a.idmenu=d.idmenu', (error, results) => {
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
      const actualiza = await  pool.query('UPDATE detallepedidos set ? WHERE iddetallepedidos= ?',[req.body,id] ,(error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          //res.status(200).json(results);
        }
      });
      return res.status(200).send('detalle fue modificado');

    }

    public  create (req: Request, res: Response){
      const {idmenu,idcomplementos,idbebidas,cantidad,total} = req.body;
      const newLink={
        idmenu,idcomplementos,idbebidas,cantidad,total
      };

       pool.query('INSERT INTO detallepedidos  set ?', [newLink],(error, results, fields) =>{
       if(error){
         console.log(error);
         return res.status(500).send(error);

       }

       return res.status(200).send('detalle guardado');

      });
      

    }

    public async delete (req: Request, res: Response): Promise<void>{

        const { id } = req.params;
        await pool.query('DELETE FROM detallepedidos WHERE iddetallepedidos = ?', [id], (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error'});
            } else {
              //res.status(200).json(results);
            }
          });
      res.json({message: 'detalle eleminado'});
    }

    public async getone (req: Request, res: Response) {

      const {id}=req.params;
      const carga = await  pool.query('SELECT a.iddetallepedidos,a.cantidad,d.nombre as menu,b.nombre as bebida, c.nombre as complementos, a.total FROM detallepedidos a INNER JOIN bebidas b ON a.idbebidas=b.idbebidas INNER JOIN complementos c ON a.idcomplementos=c.idcomplementos INNER JOIN menu d ON a.idmenu=d.idmenu WHERE iddetallepedidos= ?',[id] ,(error, results) => {
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

const  detalleController = new DetalleController();
export default detalleController;