const ticket = 200;

// descuentos

let dscEstudiante = 0.80;
let dscTrainee = 0.50;
let dscJunior = 0.15;


// Obtenemos elementos donde se van a encontrar los valores a calcular 

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');

function calcularPago() {
    let total = cantidad.value * ticket;
    switch(categoria.value) {
        case "estudiante":
            total = total - (total * dscEstudiante);
            break;
        case "trainee":
            total = total - (total * dscTrainee);
            break;
        case "junior":
            total = total - (total * dscJunior);
            break;
        default:
            total = "";
    }

    totalPagar.textContent = `Total a Pagar: $ ${total}`;

};

// Prueba para comprobar que haya datos

const objetoCampo = document.getElementsByClassName('form-control');

function recorrerObjeto() {
    for (let i = 0; i < objetoCampo.length; i++) {
        valorCampo = objetoCampo[i].value
         if (valorCampo == "") {
            objetoCampo[i].classList.add('is-invalid');
         } else {
            objetoCampo[i].classList.add('is-valid');
         };
    };
};

function comprobarCategoria() {
    if (categoria.value == "") {
        categoria.classList.add('is-invalid');
    } else {
        categoria.classList.add('is-valid');
    }
};
 


btnResumen.addEventListener('click', (evento)=> {
    evento.preventDefault();
    calcularPago();
    recorrerObjeto();
    comprobarCategoria();
   
}
);

categoria.addEventListener('click', ()=> {
    if (categoria.classList.contains('is-valid')) {
        categoria.classList.remove('is-valid')
     } else if (categoria.classList.contains('is-invalid')) {
         categoria.classList.remove('is-invalid')
     }
}
);



const objetoInput = document.getElementsByClassName('form-control');


objetoInput[0].addEventListener('click', ()=> {
    if (objetoInput[0].classList.contains('is-valid')) {
       objetoInput[0].classList.remove('is-valid')
    } else if (objetoInput[0].classList.contains('is-invalid')) {
        objetoInput[0].classList.remove('is-invalid')
    }
});

objetoInput[1].addEventListener('click', ()=> {
    if (objetoInput[1].classList.contains('is-valid')) {
       objetoInput[1].classList.remove('is-valid')
    } else if (objetoInput[1].classList.contains('is-invalid')) {
        objetoInput[1].classList.remove('is-invalid')
    }
});

objetoInput[2].addEventListener('click', ()=> {
    if (objetoInput[2].classList.contains('is-valid')) {
       objetoInput[2].classList.remove('is-valid')
    } else if (objetoInput[2].classList.contains('is-invalid')) {
        objetoInput[2].classList.remove('is-invalid')
    }
});

objetoInput[3].addEventListener('click', ()=> {
    if (objetoInput[3].classList.contains('is-valid')) {
       objetoInput[3].classList.remove('is-valid')
    } else if (objetoInput[3].classList.contains('is-invalid')) {
        objetoInput[3].classList.remove('is-invalid')
    }
});




