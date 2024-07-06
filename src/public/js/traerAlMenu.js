// Chequear la URL actual
const url = new URL(window.location.href);

// Cuando haga clic en "aplicar filtros", quiero que aparezcan en la URL como parámetros
const filtroForm = document.querySelector('#filtroForm')
filtroForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Obtener los valores de los inputs y generar parámetros de consulta de la misma forma en que lo haría un <form> si usara un envío GET simple.
    const params = new URLSearchParams(new FormData(event.target));
    // Reemplazar la URL actual con la URL actual más los parámetros de búsqueda
    window.location.search = params.toString(); // ?nombre=valor&nombre2=valor2
})

// Almacenar en una variable los parámetros para pasarlo al fetch
// obtener  parámetros de búsqueda de la URL si existen 
const params = new URLSearchParams(url.search);

let query = ''; // nombre=valor&nombre2=valor2
params.forEach((value, key) => {
    query += `${key}=${value}&`
})



/*---------------------------fetch---------------------------*/
async function ejecutar() {
    const mostrar = document.querySelector("tbody");
    try {
        const response = await fetch(`https://nodeexpress-grupo15-24137.onrender.com/menuListado?${query}`);
        console.log(response);
        if (!response.ok) {
            throw new Error('Pintura "Gamo" y laca del mismo nombre');
        }
        const resultados = await response.json();
        mostrar.innerHTML = "";
        resultados.forEach((valor) => {
            let fila = document.createElement("tr");//crear <tr></tr>
            fila.innerHTML = `<td class="${valor.tipo}">${valor.nombre}</td> <td class="${valor.tipo}">${valor.descripcion}</td> <td class="${valor.tipo}">$${Math.round(valor.precio)}</td>`
            mostrar.appendChild(fila);
        })
    } catch (error) {
        console.error("Error al consultar la tabla:", error);
    }
};



/*---------------------------mostrar filtros aplicados---------------------------*/
function mostrandoAhora(params){let filtrosEnHTML = document.getElementById("mostrar-filtros");
let txt = "Mostrando... ";
//console.log(params);
if (params.size === 0) { txt += "tipo: todo" }
else {
    params.forEach((value, key) => {
        if (value != "") { txt += ` ${key}: ${value} ` };
    })
};
filtrosEnHTML.innerHTML = txt;}
mostrandoAhora(params)
ejecutar()