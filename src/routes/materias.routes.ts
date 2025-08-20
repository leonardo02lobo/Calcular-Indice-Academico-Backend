import { Router } from "express";
import { materiasController } from "../controller/materias.controller";

const router = Router();

router.get("/obtenerMaterias/:carrera", materiasController.ObtenerMateriasPorCarrera);

export default router;