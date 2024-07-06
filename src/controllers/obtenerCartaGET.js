import { consultaSQL } from "../config/mysql.js";

//ruta get '/api/menu'

export async function obtenerCarta(req, res) {
    const texto = "SELECT * FROM carta";
    try {
        const resultado = await consultaSQL(texto);
        //console.table(resultado);
        res.json(resultado)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}