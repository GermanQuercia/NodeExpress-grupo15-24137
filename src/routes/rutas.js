import express from 'express';
import { home } from '../controllers/homeGET.js'
import { menu } from '../controllers/menuGET.js'
import { login } from '../controllers/loginGET.js'
import { obtenerMenu } from '../controllers/obtenerMenuGET.js';
import { enviarReserva } from '../controllers/enviarReservaPOST.js'
import { enviarMensajePOST } from '../controllers/enviarMensajePOST.js';
import { loginPOST } from '../controllers/loginPOST.js'
import { verifyToken } from '../helper/verifyToken.js'
import { saltearLogin } from '../helper/saltearLogin.js'
import { admin } from '../controllers/adminGET.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { obtenerMensajes } from '../controllers/obternerMensajesGET.js';
import { borrarMensaje } from '../controllers/borrarMensajeDELETE.js';
import { obtenerCarta } from '../controllers/obtenerCartaGET.js';
import { agregarACarta } from '../controllers/agregarACartaPOST.js';
import { borrarCarta } from '../controllers/borrarCartaDELETE.js';
import { modificarUno } from '../controllers/modificarUnoPUT.js';
import { cerrarSesion } from '../controllers/cerrarSesionGET.js'
import { obtenerReservas } from '../controllers/obtenerReservasGET.js';
import { borrarReserva } from '../controllers/borrarReservaDELETE.js'

const router = express.Router();

const currentDir = path.dirname(fileURLToPath(import.meta.url));
export const __dirname = path.dirname(currentDir);
//console.log(__dirname)
router.use(express.static(path.join(__dirname, "public")));


router.get('/', home);
router.get("/menu", menu);
router.get('/menuListado', obtenerMenu);
router.post("/reserva", enviarReserva);
router.post("/contacto", enviarMensajePOST);
router.post("/login", loginPOST);

router.get("/login", saltearLogin, login);

router.get("/admin", verifyToken, admin);

//mensajes get y delete
router.get("/admin/mensajes", verifyToken, obtenerMensajes);
router.delete("/admin/borrarMensaje/:id", verifyToken, borrarMensaje)

//carta get post put y delete
router.get("/admin/carta", verifyToken, obtenerCarta)
router.post("/admin/carta/agregarUnoNuevo", verifyToken, agregarACarta)
router.put("/admin/carta/modificarUno", verifyToken, modificarUno);
router.delete("/admin/borrarCarta/:id", verifyToken, borrarCarta)

//reservas get y delete
router.get("/admin/reservas", verifyToken, obtenerReservas);
router.delete("/admin/borrarReserva/:id", verifyToken, borrarReserva);

router.get("/admin/cerrarSesion", cerrarSesion);

export default router;