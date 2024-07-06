import { filtrar } from "../helper/filtrosMenu.js";
import { consultaSQL } from "../config/mysql.js";

//ruta get '/api/menu'

export async function obtenerMenu(req, res) {
    let filtros = req.query;
    let { texto, values } = filtrar(filtros);
    //console.log(texto, values)
    try {
        const resultado = await consultaSQL(texto, values);
        //const resultado = await consultaSQL("select * from carta where precio >= ?",[3000]);
        //console.table(resultado);
        res.json(resultado)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}