// variable tipo let:las variables tipo let son variables que podemos declarar e inicializar al mismo tiempo, tambien podemos solo declararlas, y asignarles un valor mas adelante en nuestro codigo.

// aca estamos declarando y asignando un valor a nuestra variable tipo let.
// let nombre = "Dante";
// document.write(nombre + "<br>");

// pero tambien podemos declararla primero y tambien podemos inicializarla mas adelante.

// let apellido;
// apellido = "Bazan";

// document.write(apellido);

// en este caso le estamos asignando un valor en una linea mas abajo de donde la estamos declarando, pero podria ser tambien en la linea 300 si asi lo deseamos.

// por ejemplo en el uso de conficionales

// vamos a crear una funcion que reciba por parametro la edad de la persona que quiere ingresar al boliche.

// let variableEdad = 17;

// const ingresoBoliche = (age) => {
//     let isTrue = false

//     if (age < 18) {
//         console.log("No puedes ingresar al boliche porque sos menor de edad.");
//         return;
//     } else if (age >= 18) {
//         console.log("Podes ingresar al boliche");
//         return;
//     }

//     return isTrue = true;
// };

// ingresoBoliche(variableEdad);

// VALIDACION DE INGRESO AL BOLICHE PERO ESTA VEZ ESTAMOS USANDO UN INPUT PARA VALIDAR LA EDAD;

const edad = document.querySelector("#edad");
const button = document.querySelector("#btn-enviar");
const mensaje = document.querySelector("#mensaje");

const podesEntrar = (input) => {

    let valid = false;

    if (!input.value.length) {
        mensaje.classList.add("error");
        mensaje.classList.remove("success");
        mensaje.innerText = "El campo debe estar completo.";
        setTimeout(() => {
            mensaje.innerText = "";
        }, 5000);
        return;
    }

    if (parseInt(input.value.length) > 2) {
        mensaje.classList.remove("success");
        mensaje.classList.add("error");
        mensaje.innerText = "No se aceptan numero tan altos.";
        setTimeout(() => {
            edad.value = "";
            mensaje.innerText = "";
        }, 5000);
        return;
    }

    if (parseInt(input.value) < 18) {
        mensaje.classList.remove("success");
        mensaje.classList.add("error");
        mensaje.innerText = "No podes ingresar, no cumplis con la edad requerida.";
        setTimeout(() => {
            edad.value = "";
            mensaje.innerText = "";
        }, 5000);

        return;
    }

    else if (parseInt(input.value) >= 40) {
        mensaje.classList.remove("success");
        mensaje.classList.add("error");
        mensaje.innerText = "No podes ingresar, el curso es para gente entre 18 y 40 años.";
        setTimeout(() => {
            edad.value = "";
            mensaje.innerText = "";
        }, 5000);

        return;
    }

    mensaje.classList.remove("error");
    mensaje.classList.add("success");
    mensaje.innerText = "Podes ingresar, a codear y aprender.";
    setTimeout(() => {
        mensaje.innerText = "";
    }, 3000);

    const redirection = setTimeout(() => {
        window.location.href = "https://www.youtube.com/@soydalto";
    }, 2000);

    return valid = true;

};

// FUNCION QUE LE DA EL INCAPIE AL EVENTO.

const isValid = () => {
    podesEntrar(edad);
};

button.addEventListener("click", isValid);
