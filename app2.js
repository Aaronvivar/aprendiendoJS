// let day = 4;
// let text;


// switch (day) {
//     case 0:
//         text = 'Domingo'
//         break;
//     case 1:
//         text = 'Lunes'
//         break;
//     case 2:
//         text = 'Martes'
//         break;
//     case 3:
//         text = 'Miercoles'
//         break;
//     case 4:
//         text = 'Jueves'
//         break;
//     case 5:
//         text = 'Viernes'
//         break;
//     case 6:
//         text = 'sabado'
//         break;


//     default:
//         text = 'error'
//         break;
// }

// console.log('Dia de la semana', text)


// let objeto = {};

// if (objeto) {
//     mensaje = "You´re going too fast";

// }
// else {
//     mensaje = "Under the limit"
// }
// console.log(mensaje)

// let tareas = [
//     'Hacer la tarea',
//     'Ir por huevo',
//     'Bailar un rato',
//     'dormirme',
//     'Roncar'];
// let cuenta = 10
// for (let index = 0; index < cuenta; index++) {

//     console.log(10 + index)
// }

for (let numerop = 2; numerop <= 100; numerop++) {

    let esPrimo = true;

    for (let i = 2; i <= numerop; i++) {

        if (numerop % i === 0 && i !== numerop)
            esPrimo = false
    }
    if (esPrimo) {
        console.log(numerop)
    }