//Haz tú validación en javascript acá


export function valida(input) {
    const tipoInput = input.dataset.tipo;


    if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
    getError(tipoInput, input);
  }


}


const tipoError = ["valueMissing", "typeMismatch",
    "patternMismatch", "cutomError"];


const msnError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    }
}


function getError(tipoInput, input) {
    let msn = "";
    tipoError.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoInput, error);
            console.log(input.validity[error]);
            msn = msnError[tipoInput][error]
        }
    });
    return msn;
}

