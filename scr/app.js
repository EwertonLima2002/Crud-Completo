// estrturar o app js para ligar o controller o routers e o models uma api rest simples
// 1. importar os modulos

import { Express } from "express";
import usuarioController from "../scr/controllers/usuarioContoller";
import { Router } from "express";
import usuarioModel from "../scr/models/usuarioModel";
import { Request, Response } from "express";

// 2. criar a rota

const router = Router();

// 3. exportar a rota

export default router;

