let tareaTexto = document.querySelector("#txtTarea");
let listadoTareas = document.querySelector("#listaTareas");
let btnAgregartareas = document.querySelector("#btnAgregarTarea");
let  arrayTareas = [];

btnAgregartareas.addEventListener("click", () => {
    let textoTarea = tareaTexto.value;
    arrayTareas.push(textoTarea);
    tareaTexto.value = "";
    let html = "";
    for (let tarea of arrayTareas) {
        html += `<li>${tarea}</li>`;
    }
    listaTareas.innerHTML = html;
});