let tareaTexto = document.querySelector("#txtTarea");
let listadoTareas = document.querySelector("#listaTareas");
let btnAgregartareas = document.querySelector("#btnAgregarTarea");

let  arrayTareas = [];
let contador = 0;

btnAgregartareas.addEventListener("click", () => {
    let textoTarea = tareaTexto.value;
    arrayTareas.push(textoTarea);
    tareaTexto.value = "";
    contador = arrayTareas.length;
    let html = "";
    for (let tarea of arrayTareas) {
        html += `<li>${tarea}
        <input  id="taraeRealizada"    type="checkbox"></li>
        <button type="submit" class="" id="eliminarTarea">Eliminar tarea</button> `;
    }
    listaTareas.innerHTML = html;
    console.log(arrayTareas.length);
    let contadorElemento = document.querySelector("#contador");
    contadorElemento.textContent = contador;
});