import { Request, Response } from "express"
import pool from './../config/db';
import { notas } from "../models/notas";

export const notasController = {
    async ObtenerNotasPorUsuario(req: Request, res: Response) {
        try {
            const { id_usuario } = req.params;

            if (id_usuario == '') {
                res.status(401).json({ "message": "ID de usuario vacía. Tienes que agregar un ID de usuario para continuar" });
                return;
            }

            const [rows] = await pool.query("SELECT * FROM calcularindiceacademicounet.notas WHERE id_usuario = ?", [id_usuario]);

            if (rows) {
                res.status(200).json({
                    "success": true,
                    "notas": rows
                });
            } else {
                res.status(404).json({ "message": "No se encontraron notas para el usuario especificado." });
            }
        } catch (error) {
            res.status(500).json({ "message": "Problemas en el servidor" });
        }
    },
    async AgregarNota(req: Request, res: Response) {
        try {
            const { notas, id } = req.body;

            if (typeof notas !== 'object' || notas === null) {
                res.status(400).json({ "message": "Debes enviar un objeto de notas para agregar." });
                return;
            }

            const notasArray = Object.entries(notas);

            for (const [codigo, valores] of notasArray) {
                if (!id) {
                    res.status(401).json({ "message": "ID de usuario vacía." });
                    return;
                }
                if (!codigo) {
                    res.status(401).json({ "message": "Código de materia vacío." });
                    return;
                }
                if (
                    typeof valores !== 'object' ||
                    valores === null ||
                    !('nota' in valores) ||
                    !('UC' in valores)
                ) {
                    res.status(400).json({ "message": "Formato de nota inválido." });
                    return;
                }
                const { nota, UC } = valores as { nota: number, UC: number };
                if (nota == null || nota == undefined) {
                    res.status(401).json({ "message": "Nota vacía." });
                    return;
                }
                if (UC == null || UC == undefined) {
                    res.status(401).json({ "message": "UC vacía." });
                    return;
                }
            }
            const updatePromises = notasArray.map(async ([id_materia, valores]) => {
                const { nota } = valores as { nota: number, UC: number };
                const [rows] = await pool.query(
                    "SELECT * FROM calcularindiceacademicounet.notas WHERE id_usuario = ? AND id_materia = ?",
                    [id, id_materia]
                );
                if ((rows as any[]).length > 0) {
                    await pool.query(
                        "UPDATE calcularindiceacademicounet.notas SET nota = ? WHERE id_usuario = ? AND id_materia = ?",
                        [nota, id, id_materia]
                    );
                } else {
                    await pool.query(
                        "INSERT INTO calcularindiceacademicounet.notas (id_usuario, id_materia, nota) VALUES (?, ?, ?)",
                        [id, id_materia, nota]
                    );
                }
            });

            await Promise.all(updatePromises);

            res.status(200).json({
                "success": true,
                "message": "Notas agregadas/actualizadas exitosamente",
            });
        } catch (error) {
            console.log((error as Error).message);
            res.status(500).json({ "message": "Problemas en el servidor" });
        }
    }
}