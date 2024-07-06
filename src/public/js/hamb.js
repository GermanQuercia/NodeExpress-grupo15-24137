/*-------------MENU-------------*/

let boton_abrir = document.getElementById("boton_menu");
let boton_cerrar = document.getElementById("cerrar_menu");
let nav = document.querySelector("nav");

function abrir() {
  boton_cerrar.classList.add("abierto");
  boton_abrir.classList.add("abierto");
  nav.classList.add("abierto");
}

function cerrar() {
  boton_cerrar.classList.remove("abierto");
  boton_abrir.classList.remove("abierto");
  nav.classList.remove("abierto");
}


/*-------------VALIDAR FORMULARIOS-------------*/

function validar1() {
  let nombre1 = document.getElementById("nombre").value.trim();
  let fecha = document.getElementById("fecha").value;
  let mesa = document.getElementById("mesa").value;
  let horario = document.getElementById("horario").value;
  let personas = document.getElementById("personas").value;
  let comentarios = document.getElementById("comentarios").value.trim();
  let respuesta = document.getElementById("respuesta1");
  //console.log(comentarios)

  if (nombre1 == "" || horario == "" || personas == "" || fecha == "" || mesa=="") {
    respuesta.innerHTML = "Complete todos los campos marcados con *";
    setTimeout(() => {
      respuesta.innerHTML = "";
    }, 1500);
    return
  }

  // respuesta.innerHTML = "¡Reserva enviada!"
  // document.getElementById("formulario1").reset(); NOOOO PONER ESTO, recien va DESPUES de la respuesta del servidor
  // setTimeout(() => {
  //   respuesta.innerHTML = "";
  // }, 2500);


  // Crear objeto de datos
  let datos = {
    nombre: nombre1,
    fecha: fecha,
    horario: horario,
    personas: personas,
    comentarios: comentarios,
    mesa: mesa,
  };

  // Enviar los datos mediante una solicitud AJAX
  fetch("http://localhost:3000/reserva", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
    .then(response => response.json())
    .then(data => {
      respuesta.innerHTML = data.message;
      setTimeout(() => {
        respuesta.innerHTML = "";
      }, 2500);
    })
    .catch(error => {
      console.error('Error:', error);
      respuesta.innerHTML = "Ocurrió un error al enviar la reserva.";
      setTimeout(() => {
        respuesta.innerHTML = "";
      }, 2500);
    });

  document.getElementById("formulario1").reset();
}

function validar2() {
  let nombre2 = document.getElementById("nombre2").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();
  let respuesta2 = document.getElementById("respuesta2");

  if (nombre2 == "" || email == "" || mensaje == "") {
    respuesta2.innerHTML = "Complete todos los campos marcados con *";
    setTimeout(() => {
      respuesta2.innerHTML = "";
    }, 1500);
    return
  }

  //respuesta2.innerHTML = "¡Mensaje enviado!"
  //document.getElementById("formulario2").reset(); NOOOO PONER ESTO, recien va DESPUES de la respuesta del servidor
  // setTimeout(() => {
  //   respuesta2.innerHTML = "";
  // }, 2500);
  // return true;

  // Crear objeto de datos
  let datos = {
    nombre: nombre2,
    email: email,
    mensaje: mensaje,
  };

  // Enviar los datos mediante una solicitud AJAX
  fetch("http://localhost:3000/contacto", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
    .then(response => response.json())
    .then(data => {
      respuesta2.innerHTML = data.message;
      setTimeout(() => {
        respuesta2.innerHTML = "";
      }, 2500);
    })
    .catch(error => {
      console.error('Error:', error);
      respuesta2.innerHTML = "Ocurrió un error al enviar el mensaje.";
      setTimeout(() => {
        respuesta2.innerHTML = "";
      }, 2500);
    });

  document.getElementById("formulario2").reset();
}

document.getElementById("formulario1").addEventListener("submit", function (event) {
  event.preventDefault();
  validar1(event);
});

document.getElementById("formulario2").addEventListener("submit", function (event) {
  event.preventDefault();
  validar2(event);
});



/*-------------RESALTADO DE SECCION-------------*/

let todos = document.getElementsByClassName("res");
//console.log(todos);
for (let i = 0; i < todos.length; i++) {
  todos[i].addEventListener("click", function (e) {

    e.preventDefault();

    let targetId = this.getAttribute('href');

    let targetSection;
    let blinkSection;
    switch (targetId) {
      case '#reservas':
        targetSection = document.getElementById("reservas");
        blinkSection = document.getElementById("seccion-tres");
        break;
      case "#ubicacion":
        targetSection = document.getElementById("ubicacion");
        blinkSection = document.getElementById("seccion-cuatro");
        break;
      case "#contacto":
        targetSection = document.getElementById("contacto");
        blinkSection = document.getElementById("seccion-ocho");
        break;
    };

    targetSection.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      blinkSection.style.backgroundColor = 'rgb(255, 239, 215, 0.35)';
      blinkSection.style.border = '2px dotted green';
    }, 700);

    setTimeout(() => {
      blinkSection.style.backgroundColor = '';
      blinkSection.style.border = '2px solid rgb(194, 6, 6)';
    }, 1200);

    setTimeout(() => {
      blinkSection.style.backgroundColor = 'rgb(255, 239, 215, 0.35)';
      blinkSection.style.border = '2px dashed blue';
    }, 1700);

    setTimeout(() => {
      blinkSection.style.backgroundColor = '';
      blinkSection.style.border = '2px solid rgb(194, 6, 6)';
    }, 2200);
  })
}


