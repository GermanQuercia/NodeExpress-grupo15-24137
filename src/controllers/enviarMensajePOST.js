import { consultaSQL } from "../config/mysql.js";

export async function enviarMensajePOST(req, res) {
    const { nombre, email, mensaje } = req.body;
    //const texto = `INSERT INTO contacto (nombre, email, mensaje) VALUES ("${nombre}", '${email}', "${mensaje}")`
    const texto = `INSERT INTO contacto (nombre, email, mensaje) VALUES (? , ? , ?)`
    try {
        await consultaSQL(texto, [nombre, email, mensaje]);
        res.json({ message: '¡Mensaje enviado!' });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('¡Error al enviar mensaje!');
    }
}