var obj, dir;
function iniciar(){
	var txt = document.getElementById("ola").innerHTML;
	var letras = txt.split("");
	var res = "";
	for(var i=0; i<letras.length; i++)
		res += "<span>" + letras[i] + "</span>";
	document.getElementById("ola").innerHTML = res;
	obj = document.getElementById("ola").firstChild;
	dir = 1;
	setInterval("efecto()", 100);
}

function efecto(){
	obj.style.color = "black";
	if(dir == 1){
		if(obj.nextSibling != null)
			obj = obj.nextSibling;
		else
			dir = 0;
	}
	else{
		if(obj.previousSibling != null)
			obj = obj.previousSibling;
		else
			dir = 1;
	}
	obj.style.color = "red";
}