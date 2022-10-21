

// // export function demo(button) {
// //     const tipoButton = button.dataset.demo;

// //     console.log(tipoButton);


// // }


// function abremodal() {
//     $("body").append('<div id="modal">


{/* <div class="video"><iframe width="560" height="315" 
src="https://www.youtube.com/embed/wcVVXUV0YUY" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe> </div> 

<div id="close"> Cerrar </div>

</div > ') */}

// $( "#close" ).click(function() {
//   $("#modal").remove() ;
// });

// // }


// // import checkComplete from "./components/checkcomplete.js";
// // import deleteBtn from "./components/deleteBtn.js"; 





// // const btn = document.querySelector('[data-form-btn]');
// //  btn.addEventListener("click", creatTask);

//  export   const creatTask = (evento) => {
//         evento.preventDefault();
//         console.log("crear tarea arrow");
//         const input = document.querySelector('[data-form-input]');
//         const value = input.value;
//         // input.value = ""
//         console.log("boton")
//         console.log(value)

//         // const task = document.querySelector('[data-task]');
//         const list = document.querySelector('[data-list]')
    
//         // const task = document.createElement('li');
//         // task.classList.add('card')
   

//         // const taskContent = document.createElement("div")
//         // // const titleTask = document.createElement("span")
    
 
    
//         // const titleTask = document.createElement("span")

//         // titleTask.classList.add('task')
//         // titleTask.innerHTML = value

//         // taskContent.appendChild(checkComplete());
//         // taskContent.appendChild(titleTask)
     
//         // task.appendChild(taskContent)
//         // task.appendChild(deleteBtn())
        
//         // list.appendChild(task);
//         console.log(main)
//     }



   
// const botones = document.querySelectorAll(".botones");
// // Definir función y evitar definirla de manera anónima
// const cuandoSeHaceClick = function (evento) {
// 	// Recuerda, this es el elemento
// 	console.log("El texto que tiene es: ", this.innerText);

// 	// Podemos cambiar cualquier cosa, p.ej. el estilo
// 	this.style.borderColor = "blue";
// }
// // botones es un arreglo así que lo recorremos
// botones.forEach(boton => {
// 	//Agregar listener
// 	boton.addEventListener("click", cuandoSeHaceClick);
// });