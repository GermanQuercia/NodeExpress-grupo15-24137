import { consultaSQL } from "../config/mysql.js";

export async function agregarACarta(req, res) {
    //console.log("agregar esto a carta", req.query)
    const algo = Object.keys(req.query)[0];
    //console.log(algo);
    const data = JSON.parse(algo);
    //console.log(data);
    const { nombre, descripcion, precio, tipo} = data;
    //console.log( nombre, descripcion, precio, tipo);
    const texto = `INSERT INTO carta (nombre, descripcion, precio, tipo) VALUES (? , ? , ?, ?)`
    const values = [nombre, descripcion, precio, tipo]
    try {
        const respuesta = await consultaSQL(texto, values);
        //console.log(respuesta)
        res.json({ message: '¡Plato agregado!' });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('¡Error al agregar!');
    }
}