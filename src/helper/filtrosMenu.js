export function filtrar(filtros) {

    ////console.log(filtros)
    let texto = "SELECT * FROM carta"
    let whereClause = '';
    let values = [];

    if (filtros.tipo !== "todo" && filtros.tipo != undefined) {
        whereClause += ` tipo LIkE '${filtros.tipo}' AND`;
    }

    if (filtros.precioMin) {
        whereClause += ` precio >= ? AND`;
        values.push(Number(filtros.precioMin));
    }

    if (filtros.precioMax) {
        whereClause += ` precio <= ? AND`;
        values.push(Number(filtros.precioMax));
    }

    if (whereClause !== '') {
        texto += " WHERE";
        texto += whereClause;
        texto = texto.slice(0, -3);
    }

    if (filtros.orden) {
        texto += ` ORDER BY precio ${filtros.orden}`;
    }

    // console.log(filtros.tipo)
    // console.log(texto, values)

    return { texto, values }
}