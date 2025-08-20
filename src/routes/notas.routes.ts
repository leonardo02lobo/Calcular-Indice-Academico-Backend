import { Router } from "express";
import { notasController } from "../controller/notas.controller";

const router = Router();

router.post("/agregarNotas", notasController.AgregarNota);
router.get("/obtenerNotas/:id_usuario", notasController.ObtenerNotasPorUsuario);

export default router;