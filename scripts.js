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

    totalPagar.textContent = `Total a pagar: $ ${total}`;

};

btnResumen.addEventListener('click', (evento)=> {
    evento.preventDefault();
    calcularPago();
}
);
