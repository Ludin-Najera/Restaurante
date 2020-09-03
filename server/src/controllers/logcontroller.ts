import {Request, Response} from 'express';

import pool from '../database'

class LogController{


    public async login (req: Request, res: Response){
      const {alias}=req.params;
      const rows = await pool.query('SELECT * FROM usuarios WHERE alias = ?', [req.body,alias] ,(error, results) => {
        

      });

    }

    public async list (req: Request, res: Response){
        const inicio = await pool.query('SELECT * FROM usuarios', (error, results) => {
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

    public async update (req: Request, res: Response){
      const {id}=req.params;
      const actualiza = await  pool.query('UPDATE usuarios set ? WHERE idusuarios= ?',[req.body,id] ,(error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      });
      res.json({Text: 'Los datos fueron actualizados'})

    }

    public  create (req: Request, res: Response){
      const {nombre, tipousuario, alias, pass} = req.body;
      const newLink={
            nombre,
            tipousuario,
            alias,pass
      };

       pool.query('INSERT INTO usuarios  set ?', [newLink],(error, results, fields) =>{
       if(error){
         console.log(error);
         return res.status(500).send(error);

       }

       return res.status(200).send('usuario guardado');

      });
      

    }

    public async delete (req: Request, res: Response): Promise<void>{

        const { id } = req.params;
        await pool.query('DELETE FROM usuarios WHERE idusuarios = ?', [id], (error, results) => {
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
      const carga = await  pool.query('SELECT * FROM usuarios WHERE idusuarios= ?',[id] ,(error, results) => {
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

const logController = new LogController();
export default logController;