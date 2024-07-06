let bandera = true;
let idParaPut;


function mostrarCarta() {
    let resultado1 = document.getElementById("resultado1");
    let resultado2 = document.getElementById("resultado2");
    let resultado3 = document.getElementById("resultado3");

    resultado1.innerHTML = "";
    resultado2.innerHTML = "";
    resultado3.style.display = 'block';

    const html1 = `
    <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Precio $</th>
        <th>Modificar</th>
        <th>Borrar</th>
    </tr>
    `
    resultado1.innerHTML = html1;

    async function paraResultado2() {
        let contenido;
        try {
            const response = await fetch(`https://nodeexpress-grupo15-24137.onrender.com/admin/carta`);
            //console.log(response);
            contenido = await response.json();
            //console.log(contenido[0].nombre)
            //console.log(contenido)

            contenido.forEach((valor) => {
                let fila = document.createElement("tr");//crear <tr></tr>
                fila.innerHTML = `<td>${valor.nombre}</td>
                <td>${valor.descripcion}</td>
                <td>${valor.precio}</td>
                <td><span onclick="modificarCarta(${valor.id}, '${valor.nombre}', '${valor.descripcion}', ${valor.precio}, '${valor.tipo}')" style="font-size: 40px; color:green; cursor:pointer">&#9998;</span></td>
                <td><span onclick="borrarCarta(${valor.id})" style="font-size: 30px; color:red; cursor:pointer">❌</span></td>
                `
                resultado2.appendChild(fila);
            })
        } catch (error) {
            console.error("Error al consultar la tabla:", error);
        }
    }
    paraResultado2()
}


async function agregarDesdeForm(e) {
    const params = new FormData(e.target);
    //console.log(params)
    const formDataObj = {};
    params.forEach((value, key) => {
        formDataObj[key] = value;
    });
    const stringConDatos = JSON.stringify(formDataObj);
    //console.log(stringConDatos);
    try {
        const response = await fetch(`https://nodeexpress-grupo15-24137.onrender.com/admin/carta/agregarUnoNuevo?${stringConDatos}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        //console.log(response);
        if (!response.ok) {
            throw new Error('Pintura "Gamo" y laca del mismo nombre');
        }
    }
    catch (error) {
        console.error("Error al agregar:", error);
    }
    function resetForm() {
        return new Promise((resolve, reject) => {
            document.getElementById("formCarta").reset();
            resolve();
        });
    }
    resetForm().then(() => {
        mostrarCarta();
    });
}


async function borrarCarta(id) {
    try {
        //console.log(id)
        const res = await fetch(`https://nodeexpress-grupo15-24137.onrender.com/admin/borrarCarta/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        mostrarCarta()

    } catch (error) {
        console.error("Error al consultar la tabla:", error);
    }
}

function modificarCarta(id, nombre, descripcion, precio, tipo) {
    //console.log(id, nombre, descripcion, precio, tipo)

    document.getElementById("nombre").scrollIntoView({ behavior: 'smooth' });
    document.getElementById('nombre').value = nombre;
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('precio').value = precio;
    document.getElementById('tipo').value = tipo;

    bandera = false;
    idParaPut= id;
}

document.getElementById("formCarta").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (bandera === true) agregarDesdeForm(e);
    if (bandera === false) modificarCartaContinuacion(e)
})

async function modificarCartaContinuacion(e) {

    const params = new FormData(e.target);
    //console.log(params)
    const formDataObj = {};
    formDataObj['idParaPut'] = idParaPut; //para agregar el id que no viene en los datos del form
    params.forEach((value, key) => {
        formDataObj[key] = value;
    });
    const stringConDatos = JSON.stringify(formDataObj);
    //console.log(stringConDatos);
    try {
        const response = await fetch(`https://nodeexpress-grupo15-24137.onrender.com/admin/carta/modificarUno?${stringConDatos}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        //console.log(response);
        if (!response.ok) {
            throw new Error('Pintura "Gamo" y laca del mismo nombre');
        }
    }
    catch (error) {
        console.error("Error al agregar:", error);
    }
    function resetForm() {
        return new Promise((resolve, reject) => {
            document.getElementById("formCarta").reset();
            resolve();
        });
    }
    resetForm().then(() => {
        mostrarCarta();
    });


    bandera = true;
}