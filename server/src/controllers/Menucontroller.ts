import {Request, Response} from 'express';

import pool from '../database'

class MenuController{

    public async list (req: Request, res: Response){
        const inicio = await pool.query('SELECT a.idmenu,a.nombre, a.descripcion,a.precio ,c.nombre as bebida, b.nombre as servicio, d.nombre as complemento FROM menu a INNER JOIN tiposervicio b ON a.idtiposervicio=b.idtiposervicio INNER JOIN bebidas c ON a.idbebidas=c.idbebidas INNER JOIN complementos d ON a.idcomplementos=d.idcomplementos', (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error'});
            } else {
              res.status(200).json(results);
            }
          });
    }

    public async update (req: Request, res: Response){
      const {idmenu}=req.params;
      const {nombre,descripcion,precio,idcomplementos,idbebidas,idtiposervicio} = req.body;
      const actualiza = await  pool.query('UPDATE menu set ? WHERE idmenu= ?',[req.body,idmenu] ,(error, results) => {
        if (error) {
          console.log(error); 
          return res.status(500).json({error});
        }
      });
      return res.status(200).json('menu fue modificada');

    }

    public  create (req: Request, res: Response){
      const {nombre,descripcion,precio,idcomplementos,idbebidas,idtiposervicio} = req.body;
      const newLink={
          nombre,precio,idcomplementos,idbebidas,idtiposervicio
      };

       pool.query('INSERT INTO menu  set ?', [newLink],(error, results, fields) =>{
       if(error){
         console.log(error);
         return res.status(500).send(error);

       }

       return res.status(200).json('menu guardado');

      });
      

    }

    public async delete (req: Request, res: Response): Promise<void>{

        const { idmenu } = req.params;
        await pool.query('DELETE FROM menu WHERE idmenu = ?', [idmenu], (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error'});
            }
          });
      res.json({message: 'menu eliminado'});
    }

    public async getone (req: Request, res: Response) {

      const {idmenu}=req.params;
      const carga = await  pool.query('SELECT a.idmenu,a.nombre, a.descripcion,a.precio ,c.nombre as bebida, b.nombre as servicio FROM menu a INNER JOIN tiposervicio b ON a.idtiposervicio=b.idtiposervicio INNER JOIN bebidas c ON a.idbebidas=c.idbebidas WHERE a.idmenu= ?',[idmenu] ,(error, results) => {
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

const  menuController = new MenuController();
export default menuController;