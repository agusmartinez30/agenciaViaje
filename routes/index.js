import express from "express";
import { guardarComentarios } from "../controllers/comentariosControllers.js";
import { paginaIncio, paginaNosotros, paginaViajes, paginaComentarios, paginaDetalleViaje } from "../controllers/paginasControllers.js";

const router = express();

router.get("/", paginaIncio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes );
  
router.get("/viajes/:slug", paginaDetalleViaje );

router.get("/comentarios", paginaComentarios);
router.post("/comentarios", guardarComentarios)

export default router;
