function mostrar(obj){
	while(obj.nextSibling != null && obj.className != "tooltip")
		obj = obj.nextSibling;
	if(obj != null)
		obj.style.display = "inline";
}

function ocultar(obj){
	while(obj.nextSibling != null && obj.className != "tooltip")
		obj = obj.nextSibling;
	if(obj != null)
		obj.style.display = "none";
}