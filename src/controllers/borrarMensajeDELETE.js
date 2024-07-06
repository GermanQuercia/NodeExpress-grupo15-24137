import { consultaSQL } from "../config/mysql.js";

//ruta get '/api/menu'

export async function borrarMensaje(req, res) {
    const values = [req.params.id];
    const texto = "DELETE FROM contacto WHERE id_contacto = ?";
    //console.log("holaHOLA", values, texto)
    try {
        const resultado = await consultaSQL(texto,values);
        //console.table(resultado);
        res.json(resultado)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}