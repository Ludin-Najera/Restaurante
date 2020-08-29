import {Request, Response} from 'express';
import pool from '../database';

class CatedraticoController{

   public async list(req: Request, res: Response){
    const inicio = await pool.query('SELECT * FROM catedratico', (error, results) => {
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

    public async getOne(req: Request, res: Response){
        
        const {id}=req.params;
        const carga = await  pool.query('SELECT * FROM catedratico WHERE IdE= ?',[id] ,(error, results) => {
          if (error) {
            console.log(error);
            res.status(500).json({status: 'error'});
          } else {
            res.status(200).json(results);
          }
        });
        res.json(carga);
        res.json({text: 'Listado'});
          

    } 

    public  create (req: Request, res: Response){
      const {Nombre, Telefono, Correo} = req.body;
      const newLink={
            Nombre,
            Telefono,
            Correo
      };

       pool.query('INSERT INTO catedratico  set ?', [newLink],(error, results, fields) =>{
       if(error){
         console.log(error);
         return res.status(500).send(error);

       }

       return res.status(200).send('catedratico guardado');

      });
      

    }
    

    public async update (req: Request, res: Response){
      const {id}=req.params;
      const actualiza = await  pool.query('UPDATE catedratico set ? WHERE IdE= ?',[req.body,id] ,(error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      });
      res.json({Text: 'Los datos fueron actualizados'})

    }
    
    public async delete(req: Request, res:Response){
      
      const {id}=req.params;
      const carga = await  pool.query('DELETE FROM catedratico WHERE IdE= ?',[id] ,(error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      });
      res.json({Text: 'Catedratico Eliminado'})
    }
}

const  catedraticoController = new CatedraticoController();
export default catedraticoController;