import { consultaSQL } from "../config/mysql.js";

// ruta post("/reserva")

export async function enviarReserva(req, res) {
    const { nombre, fecha, horario, personas, comentarios, mesa } = req.body;
    // console.log(nombre, fecha, horario, personas, comentarios, mesa);
    const texto = `CALL InsertarReservaYmesa(?, ?, ?, ?, ?, ?)`;
    const values = [nombre, fecha, horario, personas, comentarios, mesa];
    try {
        await consultaSQL(texto, values);
        res.json({ message: '¡Reserva enviada!' });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('¡Error al enviar reserva!');
    }
}