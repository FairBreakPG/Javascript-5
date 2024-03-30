let tareaTexto = document.querySelector("#txtTarea");
let listadoTareas = document.querySelector(".listaTareas");
let btnAgregartareas = document.querySelector("#btnAgregarTarea");

let arrayTareas = [
  {
    idTarea: 1,
    nombreTarea: "Aprender las bases de React y microservicios",
    estadoTarea: true,
  },
  {
    idTarea: 2,
    nombreTarea: "Leer patrones de diseño para JS y TS optimizacion",
    estadoTarea: false,
  },
  {
    idTarea: 3,
    nombreTarea: "Aprender arquitecturas de software en base a proyecto escalables",
    estadoTarea: true,
  },
];

btnAgregartareas.addEventListener("click", function () {
  let nuevaTareaNombre = tareaTexto.value.trim();
  /*Validar y copia del array*/
  if (nuevaTareaNombre !== "") {
    let idAutoIncremental =
      arrayTareas.length > 0
        ? Math.max(...arrayTareas.map((tarea) => tarea.idTarea))
        : 0;
    let nuevaTarea = {
      idTarea: idAutoIncremental + 1,
      nombreTarea: nuevaTareaNombre,
      /*siempre el estado en false */
      estadoTarea: false,
    };
    arrayTareas.push(nuevaTarea);
    /*llamado a funciones necesarias*/
    mostrarTareas();
    actualizarContadores();
    /*limpiar input*/
    tarea.tareaTexto.value = "";
  }
});

function eliminarTarea(id) {
  arrayTareas = arrayTareas.filter((tarea) => tarea.idTarea !== id);
  /*llamado a funciones necesarias*/
  mostrarTareas();
  actualizarContadores();
  reasignarIds();
}

function reasignarIds() {
  arrayTareas.forEach(() => {
    /* indice*/
    tarea.idTarea = index + 1;
  });
}

/* inicializacion */
mostrarTareas();
actualizarContadores();

function mostrarTareas() {
  /* limpiar y crear elementos de la tabla, boton y check*/
  listadoTareas.innerHTML = "";

  let fila = document.createElement("tr");
  let columnaId = document.createElement("th");
  columnaId.textContent = "ID";

  let columnaNombre = document.createElement("th");
  columnaNombre.textContent = "Tarea";

  let columnaEstado = document.createElement("th");
  columnaEstado.textContent = "Estado";

  let columnaEliminar = document.createElement("th");
  columnaEliminar.textContent = "Opciones";

  fila.appendChild(columnaId);
  fila.appendChild(columnaNombre);
  fila.appendChild(columnaEstado);
  fila.appendChild(columnaEliminar);

  listadoTareas.appendChild(fila);
  /*tabla del html si este nombre no coincide no mostrara nada*/

  arrayTareas.forEach((tarea) => {
    let fila2 = document.createElement("tr");

    let celdaId = document.createElement("td");
    celdaId.textContent = tarea.idTarea;
    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = tarea.nombreTarea;

    let celdaCheckbox = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.estadoTarea;
    checkbox.addEventListener("change", function () {
      tarea.estadoTarea = this.checked;
      actualizarContadores();
    });
    celdaCheckbox.appendChild(checkbox);

    let celdaEliminar = document.createElement("td");
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("boton-eliminar");
    botonEliminar.addEventListener("click", function () {
      eliminarTarea(tarea.idTarea);
    });
    celdaEliminar.appendChild(botonEliminar);

    fila2.appendChild(celdaId);
    fila2.appendChild(celdaNombre);
    fila2.appendChild(celdaCheckbox);
    fila2.appendChild(celdaEliminar);

    listadoTareas.appendChild(fila2);
  });
}

function actualizarContadores() {
  let contadorTotal = document.querySelector("#contadorTotal");
  contadorTotal.textContent = arrayTareas.length;
  let tareasRealizadas = arrayTareas.filter(
    (tarea) => tarea.estadoTarea === true
  ).length;
  let contadorTotalRealizadas = document.querySelector("#contadorRealizadas");
  contadorTotalRealizadas.textContent = tareasRealizadas;
}
