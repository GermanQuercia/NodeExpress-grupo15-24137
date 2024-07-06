import { consultaSQL } from "../config/mysql.js";

//ruta get '/api/menu'

export async function obtenerReservas(req, res) {
    const texto = `SELECT 
                id_reserva, nombre, fecha, horario, reserva.personas, comentarios, mesa_id, id_mesa, numero_mesa, mesa.personas, estado
                FROM reserva
                INNER JOIN mesa
                ON reserva.mesa_id = mesa.id_mesa;`;
    try {
        const resultado = await consultaSQL(texto);
        //console.table(resultado);
        res.json(resultado)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}