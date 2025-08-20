import pool from './../config/db';
import { Request, Response } from 'express';
import { materias } from '../models/materias';

export const materiasController = {
    async ObtenerMateriasPorCarrera(req: Request,res: Response){
        try{
            const {carrera} = req.params;

            if(carrera == ''){
                res.status(401).json({"message":"Carrera Vacia. Tienes que agregar una carrera para continuar"});
                return;
            }
            const [rows] = await pool.query("SELECT * FROM calcularindiceacademicounet.materias WHERE carrera = ?", [carrera]);
            if(rows){
                res.status(200).json({
                    "success": true,
                    "materias": rows
                });
            } else {
                res.status(404).json({"message": "No se encontraron materias para la carrera especificada."});
            }
        }catch(error){
            res.status(500).json({ "message": "Problemas en el servidor" });
        }
    }
}