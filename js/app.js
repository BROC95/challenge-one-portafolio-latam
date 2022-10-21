// import { valida } from "./validacion";
// import { creatTask } from "./modal";

const inputs = document.querySelectorAll("input");
// const buttoms = document.querySelectorAll("button");
// const btn = document.querySelector('[data-form-btn]');


// inputs.forEach((input) => {
//     input.addEventListener("blur", (input) => {
//         valida(input.target)
//     });
// });



const botones = document.querySelectorAll(".experience__botao--demo");
console.log("goa")
// Definir función y evitar definirla de manera anónima
const cuandoSeHaceClick = function (evento) {
	// Recuerda, this es el elemento
    console.log("El texto que tiene es: ", this.innerText);
    const parent = evento.target.parentElement
    // const abue = parent.target.parentElement
    console.log("hola",parent)
    // console.log("hola",abue)
    // console.log(botones.values())

	// Podemos cambiar cualquier cosa, p.ej. el estilo
    this.style.borderColor = "red";
//   const d =  abremodal();
    //    $("body").append('<div id="modal"><div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/wcVVXUV0YUY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>  <div id="close"> Cerrar </div></div>')

    // $("#close").click(function () {
    //     $("#modal").remove();
// })
    
    // const da = document.createElement("div");

    const context = '<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/wcVVXUV0YUY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> ';

    // da.innerHTML(context);
    // document.createElement(context);
}
// botones es un arreglo así que lo recorremos
botones.forEach(boton => {
	//Agregar listener
	boton.addEventListener("click", cuandoSeHaceClick);
	// boton.addEventListener("click",abremodal() );
});


function abremodal() {
    $("body").append('<div id="modal"><div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/wcVVXUV0YUY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>  <div id="close"> Cerrar </div></div>')

    $("#close").click(function () {
        $("#modal").remove();
    });
};
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}