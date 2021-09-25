let add = document.getElementById('add');
let lista = document.getElementById('lista');
let texto = document.getElementById('text');
let deleteBtn = document.getElementById('delete');

/* Agregar Elementos y darle un color aleatorio */
add.addEventListener('click',(e)=>{
    if(texto.value === ""){
        alert("Ingrese una palabra")
    }else{
        if(lista.hasChildNodes()){
            for(let x = 0 ; x<lista.children.length; x++){
                if(lista.children[x].innerHTML === ""){
                    lista.children[x].style.color = colorHEX();
                    lista.children[x].innerHTML = texto.value;
                    break;
                }
            }
            texto.value = "";
        }
    }
})
/* Borrar ultimo elemento de la lista */
deleteBtn.addEventListener('click',(e)=>{
    for(let x = lista.children.length-1; x >= 0; x--){
        console.log(lista.children[x]);
        if(lista.children[x].innerHTML != ""){
            lista.children[x].style.color = "";
            lista.children[x].innerHTML ="";
            break;
        }
    }
    
})



/* Funciones para obtener colores aleatorios */
function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}	
function colorHEX(){
	var coolor = "";
	for(var i=0;i<6;i++){
		coolor = coolor + generarLetra() ;
	}
	return "#" + coolor;
}