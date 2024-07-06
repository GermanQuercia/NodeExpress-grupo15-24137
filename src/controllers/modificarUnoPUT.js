import { consultaSQL } from "../config/mysql.js";

export async function modificarUno(req, res) {

    //console.log("agregar esto a carta", req.query)
    const algo = Object.keys(req.query)[0];
    //console.log(algo);
    const data = JSON.parse(algo);
    //console.log(data);
    const { idParaPut, nombre, descripcion, precio, tipo} = data;
    //console.log(nombre, descripcion, precio, tipo);
    const texto = "UPDATE `carta` SET `nombre` = ?, `descripcion` = ?, `precio` = ?, `tipo` = ? WHERE `id` = ?";
    const values = [ nombre, descripcion, precio, tipo, idParaPut];
    //console.log(texto, values);
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