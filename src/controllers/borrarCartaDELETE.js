import { consultaSQL } from "../config/mysql.js";

//ruta get '/api/menu'

export async function borrarCarta(req, res) {
    const id = req.params.id
    const values = [Number(id)]
    //console.log(typeof(values), values);
    const texto = "DELETE FROM carta WHERE id = ?";
    //console.log("chauchau carta", values, texto)
    try {
        const resultado = await consultaSQL(texto,values);
        //console.log(resultado);
        res.json(resultado)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}