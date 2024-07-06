function mostrarMensajes() {

    let resultado1 = document.getElementById("resultado1");
    let resultado2 = document.getElementById("resultado2");
    let resultado3 = document.getElementById("resultado3");

    resultado1.innerHTML = "";
    resultado2.innerHTML = "";
    resultado3.style.display = 'none';

    const html1 = `
    <tr>
        <th style="padding: 20px 10px">Nombre</th>
        <th style="padding: 20px 0px">eMail</th>
        <th style="padding: 20px 0px">Mensaje a leer</th>
        <th style="padding: 20px 20px">Borrar ya leído</th>
    </tr>
    `
    resultado1.innerHTML = html1;

    // ------------------------------

    async function paraResultado2() {
        let contenido;
        try {
            const response = await fetch(`http://localhost:3000/admin/mensajes`);
            //console.log(response);
            contenido = await response.json();
            console.log(contenido)
            if (contenido.length == 0) {
                resultado2.innerHTML = '<tr><td colspan="4" style="text-align: center">No hay mensajes</td><tr>';
            }
            //console.log(contenido[0].nombre)
            //console.log(contenido)

            contenido.forEach((valor) => {
                let fila = document.createElement("tr");//crear <tr></tr>
                fila.innerHTML = `<td>${valor.nombre}</td>
                <td>${valor.email}</td>
                <td>${valor.mensaje}</td>
                <td><span onclick="borrarMens(${valor.id_contacto})" style="font-size: 30px; color:red; cursor:pointer">❌</span></td>
                `
                resultado2.appendChild(fila);
            })
        } catch (error) {
            console.error("Error al consultar la tabla:", error);
        }
    }
    paraResultado2()
}
async function borrarMens(id) {
    try {
        //console.log(id)
        const res = await fetch(`http://localhost:3000/admin/borrarMensaje/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        mostrarMensajes()
    } catch (error) {
        console.error("Error al consultar la tabla:", error);
    }
}