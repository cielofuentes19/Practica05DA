let Empleados = [];
let deleteBtn = document.getElementById('delete');
let lista = document.getElementById('lista');
/* Esta funcion se ejecuta cuando se carga la pagina*/
window.addEventListener("load", function (event) {
    cargarEmpleados();
});

/* Funcion para eliminar empleados*/
lista.addEventListener('click',(e)=>{
    console.log(Empleados);
    /* Detectamos que el click se dio en el boton de eliminar */
    if(e.path[0].innerHTML.trim() === "Eliminar"){
        alert(`Eliminando a ${e.target.id}`)
        /*Filtramos el arreglo de empleados para obtener uno sin el elemento eliminado */
        Empleados = Empleados.filter( x => x.Nombre !== e.target.id);
        /*Guardamos el arreglo filtrado */
        localStorage.setItem('empleados',JSON.stringify(Empleados));
        cargarEmpleados();
    }
});

/* Calculamos la diferencia en horas y minutos*/
function obtenerHoras(i,f){
    let inicio = i.split(":");
    let fin = f.split(":");
    inicio = inicio.map((e)=>{
        return parseInt(e);
    })
    fin = fin.map((e)=>{
        return parseInt(e);
    })
    let minutes = inicio[1] + fin[1];
    let hours = fin[0] - inicio[0];
    while(minutes > 60){
        hours++;
        minutes = minutes - 60; 
    }
    return {
        minutes: minutes,
        hours: hours,
    }
}
/* Se lee los datos del local storage y se pinta en el DOM */
function cargarEmpleados(){
    /* Limpiamos la lista */
    lista.innerHTML = '';
    /* Validamos si no tenemos elementos registrados */
    Empleados = JSON.parse(localStorage.getItem('empleados'));
    if (Empleados === null) {
        Empleados = [];
    }
    else {
        /* Recorremos cada elemenmto y lo agregamos al html */
        Empleados.forEach(element => {
            let horasT = obtenerHoras(element.entrada, element.salida);
            let Sueldo = ((element.Sueldo * horasT.hours) + (element.Sueldo * horasT.minutes/100))*30;
            lista.innerHTML +=
                    `<div class="info">
                        <div class="tittle-card">
                            <b>${element.Nombre} - ${element.puesto}</b> 
                            <div>
                                <b>Pago:</b>
                                ${Sueldo}
                            </div>
                        </div>
                        <div class="hours">
                            <div>
                                <b>Entrada</b>
                                ${element.entrada}
                            </div>
                            <div>
                                <b>Salida</b>
                                ${element.salida}
                            </div>
                            <div>
                                <b>Horas T.</b>
                                ${ horasT.hours}hrs ${horasT.minutes}min
                            </div>
                        </div>
                        <div class="actions">
                            <button id='${element.Nombre}'class="btn btn-danger">
                                Eliminar
                            </button>
                        </div>
                    </div>
                `
        });
    }
}
