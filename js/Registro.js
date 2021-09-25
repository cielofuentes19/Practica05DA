/*Variable que almacenara temporalmente los empleados*/
let Empleados = [];
/* Obteniendo todos los elementos del html que necesitamos */
const boton = document.getElementById('reset');
const form = document.getElementById('formulario');
let nombre = document.getElementById('name');
let sueldo = document.getElementById('salary');
let entrada = document.getElementById('enter');
let salida = document.getElementById('out');
let trabajo = document.getElementById('job');

/* Funcion que valida cada empleado, regresa un objeto que tiene la informacion y un
booleano verdadero o falso dependiendo de si es valido o no */
const validar = ()=>{
    let data = {
        Nombre: nombre.value,
        Sueldo: parseFloat(sueldo.value),
        entrada: entrada.value,
        salida: salida.value,
        puesto: trabajo.value,
    }
    if(data.Nombre === "" || data.Sueldo === "" || data.entrada === "" || data.salida === "" || data.puesto === ""){
        alert("Rellene todos los campos")
        return {
            emp: data,
            valido: false,
        }
    }else{
        let horas = obtenerHoras(data.entrada,data.salida)
        if(horas.fin > horas.inicio){
            return {
                emp: data,
                valido: true,
            }
        }
        else{
            alert("Coloque correctamente la entrada y salida")
            return {
                emp: data,
                valido: false,
            }
        }
        
    }
    
}
/* Funcion para resetear los inputs en el formulario*/
const resetear = ()=>{
    nombre.value = '';
    sueldo.value = '';
    entrada.value = '';
    salida.value = '';
    trabajo.value = '';
}

// funcion que se acciona cuando se presiona el boton resetear
boton.addEventListener('click',resetear);

/*En esta funcion validamos el usuario y lo almacenamos en el local storage*/
form.addEventListener('submit',(event)=>{
    // Es necesario evitar que el navegador se actualice
    event.preventDefault();
    let empleadoValido = validar();
    /* Si el empleado es valido se obtienen todos los registros guardados se convierten a un array
    y se agrega al final del arreglo para volver a insertarlo al localStorage */
    if(empleadoValido.valido === true){
        Empleados = JSON.parse(localStorage.getItem('empleados'));
        if (Empleados === null) {
            Empleados = [];
        }
        Empleados.push(empleadoValido.emp);
        localStorage.setItem('empleados',JSON.stringify(Empleados));
        resetear();
    }

})

/* obtiene la diferencia en horas trabajadas */
const obtenerHoras= (i,f) => {
    let inicio = i.split(":");
    let fin = f.split(":");
    inicio = inicio.map((e)=>{
        return parseInt(e);
    })
    fin = fin.map((e)=>{
        return parseInt(e);
    })
    let hours = fin[0] - inicio[0];
    return{
        inicio: inicio[0],
        fin: fin[0],
    }
}