import { Request, Response } from "express"
import pool from "../config/db"
import { Usuario } from "../models/usuario"
import { hashPassword, compararPassword} from "../config/hashing"

export const usuarioController = {
    async IniciarSesion(req: Request, res: Response) {
        try {
            const { nombreUsuario, contrasenia }: Usuario = req.body
            if (nombreUsuario == '') {
                res.status(401).json({ "message": "Nombre de Usuario Vacia. Tienes que agregar un nombre de usuario para continuar" })
                return
            }

            if (contrasenia == '') {
                res.status(401).json({ "message": "Contrasenia Vacia. Tienes que agregar una contraseña para continuar" })
                return
            }

            const result:any = await pool.query("SELECT * FROM calcularindiceacademicounet.usuario WHERE nombreUsuario = ?",
                [nombreUsuario]
            )

            const row = result[0]

            if (row.length > 0) {
                const usuario = row[0];

                const id = usuario.id;
                const nombreUsuario = usuario.nombreUsuario;
                const contraseniaHash = usuario.contrasenia;
                const carrera = usuario.carrera;

                const comparar:Boolean = await compararPassword(contrasenia,contraseniaHash)
                
                if(comparar){
                    res.status(200).json({
                        "success":true,
                        "user": {
                            "id": id,
                            "nombreUsuario": nombreUsuario,
                            "carrera": carrera
                        }
                    })
                }
            } else {
                console.log("No se encontró ningún usuario con ese nombre.");
            }
        } catch (error) {
            res.status(500).json({ "message": "Problemas en el servidor" })
        }
    },
    async Registrarse(req: Request, res: Response) {
        try {
            const { nombreUsuario, contrasenia, carrera }: Usuario = req.body

            if (nombreUsuario == '') {
                res.status(401).json({ "message": "Nombre de Usuario Vacia. Tienes que agregar un nombre de usuario para continuar" })
                return
            }

            if (contrasenia == '') {
                res.status(401).json({ "message": "Contrasenia Vacia. Tienes que agregar una contraseña para continuar" })
                return
            }

            if (contrasenia.length < 8) {
                res.status(401).json({ "message": "La longitud de la contraseña tiene que ser mayor a 8 caracteres" })
                return
            }
            if (carrera == null || carrera == '') {
                res.status(401).json({ "message": "Tienes que especificar una carrera" })
                return
            }

            const contraseniaHashing = await hashPassword(contrasenia)
            await pool.query("INSERT INTO calcularindiceacademicounet.usuario(nombreUsuario,contrasenia,carrera) VALUES(?,?,?)",
                [nombreUsuario, contraseniaHashing, carrera]);
            res.status(201).json({"success":true})
        } catch (error) {
            res.status(500).json({
                "message": "Error al procesar los datos",
                "error": (error as Error).message
            })
        }
    }
}