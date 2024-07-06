function mostrarReservas() {

    let resultado1 = document.getElementById("resultado1");
    let resultado2 = document.getElementById("resultado2");
    let resultado3 = document.getElementById("resultado3");

    resultado1.innerHTML = "";
    resultado2.innerHTML = "";
    resultado3.style.display = 'none';

    const html1 = `
    <tr>
        <th style="padding: 20px 2px">Nombre</th>
        <th style="padding: 20px 2px">Fecha</th>
        <th style="padding: 20px 2px">Horario</th>
        <th style="padding: 20px 2px">Cantidad de personas</th>
        <th style="padding: 20px 2px">Número de mesa</th>
        <th style="padding: 20px 2px">Estado</th>
        <th style="padding: 20px 2px">Comentarios</th>
        <th style="padding: 20px 2px">Borrar</th>
    </tr>
    `
    resultado1.innerHTML = html1;

    // ------------------------------

    async function paraResultado2() {
        let contenido;
        try {
            const response = await fetch(`https://nodeexpress-grupo15-24137.onrender.com/admin/reservas`);
            //console.log(response);
            contenido = await response.json();
            //console.log(contenido[0].nombre)
            //console.log(contenido)

            if (contenido.length == 0) {
                resultado2.innerHTML = '<tr><td colspan="8" style="text-align: center">No hay reservas</td><tr>';
            }

            contenido.forEach((valor) => {
                let fila = document.createElement("tr");//crear <tr></tr>
                fila.innerHTML = `<td>${valor.nombre}</td>
                <td>${valor.fecha.substring(0, 10)}</td>
                <td>${valor.horario}</td>
                <td>${valor.personas}</td>
                <td>${valor.numero_mesa}</td>
                <td>${valor.estado}</td>
                <td>${valor.comentarios}</td>
                <td><span onclick="borrarReser(${valor.id_reserva})" style="font-size: 30px; color:red; cursor:pointer">❌</span></td>
                `
                resultado2.appendChild(fila);
            })
        } catch (error) {
            console.error("Error al consultar la tabla:", error);
        }
    }
    paraResultado2()
}
async function borrarReser(id) {
    try {
        //console.log(id)
        const res = await fetch(`https://nodeexpress-grupo15-24137.onrender.com/admin/borrarReserva/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        mostrarReservas()
    } catch (error) {
        console.error("Error al consultar la tabla:", error);
    }
}