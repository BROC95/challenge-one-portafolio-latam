
// Obtener referencia a botón
// Recuerda: el numeral o # indica id
const boton = document.querySelector("#miBoton");
const boton2 = document.querySelector("#miBoton2");
const boton3 = document.querySelector("#miBoton3");
// Agregar listener
boton.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	alert("Le has dado click");
});

boton2.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	alert("Le has dado click 2");
});

boton3.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	alert("Le has dado click 3");
});



const botones = document.querySelectorAll(".botones");
// Definir función y evitar definirla de manera anónima
const cuandoSeHaceClick = function (evento) {
	// Recuerda, this es el elemento
	console.log("El texto que tiene es: ", this.innerText);

	// Podemos cambiar cualquier cosa, p.ej. el estilo
	this.style.borderColor = "blue";
}
// botones es un arreglo así que lo recorremos
botones.forEach(boton => {
	//Agregar listener
	boton.addEventListener("click", cuandoSeHaceClick);
});