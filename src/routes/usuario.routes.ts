import { Router } from "express";
import { usuarioController } from "../controller/usuario.controller";

const router = Router();

router.post("/crearUsuario",usuarioController.Registrarse);
router.post("/IniciarSesion",usuarioController.IniciarSesion);


export default router;