try {
    document.createElement("canvas").getContext("2d");
} catch (e) {
    alert("HTML5 no está soportado en tu navegador");
}
var temps, velocitat, increment;
temps = 0;
increment=0;
function pintarLinea() {
	"use strict";
	// Obtenemos el canvas y su contexto
	var canvas = document.getElementById('recerca'), context = canvas.getContext('2d'), angle, yangle, yfinal, xfinal, cosangle, co, yfinalangle, festatic;
	angle = document.getElementById("angle").value;
	festatic = document.getElementById("festatic").value;
	if(angle < 0 || angle > 38){
		alert("El valor de l'angle que has introduit no funciona, l'angle ha d'estar dintre del rang : 0 - 38, sin\u00f3, el programa no funciona.");
			location.reload();
			document.getElementById("angle").value = 0;
			document.getElementById("massa").value = 0;
			document.getElementById("pes").value = 0;
			document.getElementById("festatic").value = 0;
			document.getElementById("fdinamic").value = 0;
			document.getElementById("llargada").value = 0;
			document.getElementById("altura").value = 0;
			document.getElementById("ttrans").value = 0;
			document.getElementById("ttotal").value = 0;
			document.getElementById("ecinetica").value = 0;
			document.getElementById("epotencial").value = 0;
			document.getElementById("velocitat").value = 0;
			document.getElementById("acceleracio").value = 0;
	}
	yangle = Math.tan(angle * Math.PI / 180) * 500;
	yfinal = 400 - yangle;
	// Dibuixo el marc d'acció
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(0, 400);
	context.moveTo(0, 400);
	context.lineTo(500, 400);
	context.moveTo(500, 400);
	context.lineTo(500, 0);
	context.moveTo(500, 0);
	context.lineTo(0, 0);
	// Angle
	context.moveTo(500, 400);
	// Arreglo el problema de l'angle
	if (yfinal < 0) {
		xfinal = -yfinal;
		yfinal = 0;
	} else {
		xfinal = 0;
	}
	context.lineTo(xfinal, yfinal);
	// Actualitzem el marc

	// Aconsegueixo tots els paràmetres per dibuixar el cos
	if (yfinal < 0) {
		xfinal = -yfinal;
		yfinal = 0;
	} else {
		xfinal = 0;
	}
	cosangle = Math.tan(angle * Math.PI / 180);
	co = cosangle * 50;
	yfinalangle = yfinal - 50;
	// Vull tenir clars els valors
	var esquerrax, esquerray, dretax, dretay, daltx, dalty, baixx, baixy, tempsanglat;
	tempsanglat = temps * Math.tan(angle * Math.PI / 180);
	baixx = xfinal + temps;
	baixy = yfinal + tempsanglat;
	esquerrax = xfinal + co + temps;
	esquerray = yfinalangle + tempsanglat;
	dretax = xfinal + 50 + co + temps;
	dretay = yfinalangle + co + tempsanglat;
	daltx = xfinal + 50 + temps;
	dalty = yfinal + co + tempsanglat;
	document.getElementById("alturanova").value = baixy;
	// Dibuix del cos
	context.moveTo(baixx, baixy);
	context.lineTo(esquerrax, esquerray);
	context.moveTo(esquerrax, esquerray);
	context.lineTo(dretax, dretay);
	context.moveTo(dretax, dretay);
	context.lineTo(daltx, dalty);
	
	if(baixx > 500){
		window.clearInterval(pintarBucle);
		window.clearInterval(Temps);
	}
	// Actualitzem el marc

	context.stroke();
}
function incrementarTemps() {

	var bool, ffregament, normal, angle, massa, pes, festatic, acceleracio, llargada, ttotal, ttrans, hipotenusa, llargadarecorreguda, pixelsrecorreguts, ecinetica, epotencial, costat, alturanova, baixy;
	
	// Recullo totes les dades
	angle = parseFloat(document.getElementById("angle").value);
	massa = parseFloat(document.getElementById("massa").value);
	festatic = parseFloat(document.getElementById("festatic").value);
	fdinamic = parseFloat(document.getElementById("fdinamic").value);
	llargada = parseFloat(document.getElementById("llargada").value);
	ttrans = parseFloat(document.getElementById("ttrans").value);
	altura = parseFloat(document.getElementById("altura").value);
	baixy =  parseFloat(document.getElementById("alturanova").value);
	costat =  400 * llargada/500;
	alturanova = costat - (baixy * costat / 400);
	pes=Math.round(massa * 9.81 * 100)/100;
	normal=pes*Math.cos(angle * Math.PI / 180); 
	ffregament=festatic * normal;
	acceleracio=(9.81 * Math.sin(angle * Math.PI / 180))-(fdinamic * 9.81 * Math.cos(angle * Math.PI / 180)); 
	ttotal=Math.sqrt(2*llargada/acceleracio); // Fins aquí tot b
	velocitat=acceleracio * increment;
	increment=increment + 0.1;
	// Comprovacions varies
	hipotenusa = 500 / Math.sin(angle * Math.PI / 180);
	llargadarecorreguda = velocitat * 0.1;
	pixelsrecorreguts = llargadarecorreguda * 500 / llargada;
	ecinetica = 0.5 * massa * (velocitat*velocitat);
	epotencial = pes * alturanova;
	if(Math.atan(angle * Math.PI / 180) >= festatic){
		document.getElementById("acceleracio").value = Math.round(acceleracio * 1000)/1000;
		document.getElementById("ttotal").value = Math.round(ttotal * 1000)/1000;
		temps = (pixelsrecorreguts * Math.cos(angle * Math.PI / 180)) + temps;
		document.getElementById("ttrans").value = Math.round((0.1 + ttrans) * 1000)/1000;
		document.getElementById("velocitat").value = Math.round(velocitat * 1000)/1000;
		document.getElementById("ecinetica").value = Math.round(ecinetica * 1000)/1000;
		document.getElementById("epotencial").value = Math.round(epotencial * 1000)/1000;
		}else{
			alert("El cos no pesa suficient com per baixar per el pla, el que decideix si un cos baixa o no \u00e9s la relaci\u00f3 angle - coeficient de fregament est\u00E0.");
			location.reload();
			document.getElementById("angle").value = 0;
			document.getElementById("massa").value = 0;
			document.getElementById("pes").value = 0;
			document.getElementById("festatic").value = 0;
			document.getElementById("fdinamic").value = 0;
			document.getElementById("llargada").value = 0;
			document.getElementById("altura").value = 0;
			document.getElementById("ttrans").value = 0;
			document.getElementById("ttotal").value = 0;
			document.getElementById("ecinetica").value = 0;
			document.getElementById("epotencial").value = 0;
			document.getElementById("acceleracio").value = 0;
			document.getElementById("velocitat").value = 0;
		}
		if(ttrans >= ttotal){
			document.getElementById("ttrans").value = Math.round(ttotal * 1000)/1000;;
			document.getElementById("epotencial").value = 0;
		
		}
}
var pintarBucle, Temps;
function simular() {
	if (document.getElementById("pes").value == "" || document.getElementById("massa").value == "" || document.getElementById("angle").value == "" || document.getElementById("festatic").value == "" || document.getElementById("fdinamic").value == "" || document.getElementById("massa").value == 0 || document.getElementById("pes").value == 0 || document.getElementById("angle").value == 0 || document.getElementById("llargada").value == 0 || document.getElementById("altura").value == 0){
		alert("Has d'emplenar tots els textbox de l'esquerra, i excepte en els fregaments, els altres camps no poden ser nuls");
	}else{
		pintarBucle = window.setInterval("pintarLinea()", 100);
		Temps = window.setInterval("incrementarTemps()", 100);
		var simular_boto = document.getElementById('simular');
		simular_boto.setAttribute('type', "hidden");
		var simular_botonou = document.getElementById('aturar');
		simular_botonou.setAttribute('type', "button");
		}
}
function aturar() {
	window.clearInterval(pintarBucle);
	window.clearInterval(Temps);
	var aturar_boto = document.getElementById('simular');
	aturar_boto.setAttribute('type', "button");
	var aturar_botonou = document.getElementById('aturar');
	aturar_botonou.setAttribute('type', "hidden");
}
function calcularPes() {
	"use strict";
	var massa, pes, pesResultat;
	massa = document.getElementById("massa").value;
	pesResultat = Math.round(massa * 9.81 * 100)/100;
	document.getElementById("pes").value = pesResultat;

}
function calcularAltura() {
	"use strict";
	var altura, angle, llargada;
	if(document.getElementById("angle").value != "" &&  document.getElementById("angle").value != 0 && document.getElementById("llargada").value != "" && document.getElementById("llargada").value != 0){
		angle = document.getElementById("angle").value;
		llargada = document.getElementById("llargada").value;
		altura = llargada * Math.tan(angle * Math.PI / 180);
		document.getElementById("altura").value = Math.round(altura * 1000)/1000;}
}
function calcularLlargada() {
	"use strict";
	var altura, angle, llargada;
	if(document.getElementById("angle").value != "" &&  document.getElementById("angle").value != 0 && document.getElementById("altura").value != "" && document.getElementById("altura").value != 0){
		angle = document.getElementById("angle").value;
		altura = document.getElementById("altura").value;
		llargada = altura / Math.tan(angle * Math.PI / 180);
		document.getElementById("llargada").value = Math.round(llargada * 1000)/1000;}

}
function calcularAngle() {
	"use strict";
	var altura, angle, llargada;
	if(document.getElementById("altura").value != "" &&  document.getElementById("altura").value != 0 && document.getElementById("llargada").value != "" && document.getElementById("llargada").value != 0){
		altura = document.getElementById("altura").value;
		llargada = document.getElementById("llargada").value;
		angle = Math.atan(altura / llargada) * 180/Math.PI;
		document.getElementById("angle").value = Math.round(angle * 1000)/1000;}

}
function calcularMassa() {
	"use strict";
	var massa, pes, pesResultat;
	massa = document.getElementById("pes").value;
	pesResultat = Math.round(massa / 9.81 * 1000)/1000;
	document.getElementById("massa").value = pesResultat;
}
function puntInicial(){
			document.getElementById("ttrans").value = 0;
			document.getElementById("ecinetica").value = 0;
			document.getElementById("epotencial").value = 0;
			document.getElementById("velocitat").value = 0;
}

