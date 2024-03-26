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
        <button type="submit" class="" onclick="eliminarTarea(${tarea.id})" id="eliminarTarea">Eliminar tarea</button> `;
    }
    listaTareas.innerHTML = html;
    console.log(arrayTareas.length);
    let contadorElemento = document.querySelector("#contador");
    contadorElemento.textContent = contador;
});



function eliminarTarea(id){
    let index = arrayTareas.findIndex((ele) => ele.id == id)
    arrayTareas.splice(index, 1)
    let html = ""
    for (tarea of arrayTareas) {
    html += `<li> <button onclick="borrar(${tarea.id})"> x
   </button> </li>`;
    }
    listadoTareas.innerHTML = html;
    }
   