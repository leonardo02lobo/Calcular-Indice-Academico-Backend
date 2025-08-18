import { Request, Response } from "express"
import pool from "../config/db"
import { Usuario } from "../models/usuario"

export const usuarioController = {
    async IniciarSesion(req: Request, res: Response) {
        
    },
    async Registrarse(req: Request, res: Response) {
        const {nombreUsuario,contrasenia,carrera}: Usuario = req.body

        if(nombreUsuario == ''){
            
        }
    }
}