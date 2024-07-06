import { consultaSQL } from "../config/mysql.js";
import bcryptjs from 'bcryptjs';
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
//import { __dirname } from '../routes/rutas.js'
import path from 'path';
import { fileURLToPath } from 'url';



dotenv.config();

const currentDir = path.dirname(fileURLToPath(import.meta.url));
export const __dirname = path.dirname(currentDir);
// console.log(__dirname)

const rutaCookie = path.join(__dirname, "public", "html", "admin")
// console.log("rutacookie", rutaCookie)

export async function loginPOST(req, res) {
    //// console.log(req, req.body.user, req.body.password)
    const user = req.body.user;
    const password = req.body.password;
    if (!user || !password) {
        return res.status(400).send({ status: "Error", message: "Los campos están incompletos" })
    }
    try {
        const TODOSusuarioDB = await consultaSQL("SELECT id_usuarios, nombre, pass FROM usuarios");
        // console.log(TODOSusuarioDB);
        const estasONO = TODOSusuarioDB.find(usuario => usuario.nombre === user);
        // console.log(estasONO);
        // console.log(user, password);
        if (!estasONO) {
            return res.status(400).send({ status: "Error", statusText: "Error durante el Login" })
        };

        const loginCorrecto = await bcryptjs.compare(password, estasONO.pass);
        // console.log(password, estasONO.pass, loginCorrecto);

        if (!loginCorrecto) {
            return res.status(400).send({ status: "Error", statusText: "Error durante el Login" })
        }

        const token = jsonwebtoken.sign(
            {
                user: estasONO,
                role: 'admin'
            },
            process.env.JWT_PASS,
            { expiresIn: process.env.JWT_EXPIRATION });

        const cookieOption = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: false,
            //path: `${rutaCookie}`
        }

        //console.log(token, cookieOption)

        res.cookie("token", token, cookieOption).send({ status: "ok" });

    } catch (err) {

    }


}