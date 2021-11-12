// const resultado1 = forEach([2, 3, 4], val => val * 2);
// console.log(resultado1);

// const resultado2 = forEach([2, 3, 4], (val) => {
//     return 'mucho texto ' + val;
// });
// console.log(resultado2);

// function forEach(arreglo, callback) {
//     const resultado = [];

//     for (let index = 0; index < arreglo.length; index++) {
//         resultado.push(callback(arreglo[index]));
//     }

//     return resultado;
// }

// const resultado3 = filter([1,2,3,4], val => val % 2 === 0);
// console.log(resultado3);

// const resultado4 = filter([1,2,3,4], val => val===1);
// console.log(resultado4);

// function filter(arreglo, callback) {
//     const resultado = [];

//     for (let index = 0; index < arreglo.length; index++) {

//         if (callback(arreglo[index])){
//             resultado.push(arreglo[index]);
//         }
//     }
//     return resultado;
// }


// const process = [1,2,3,4].filter(item=>item % 2 === 0);
// console.log(process);

// Una accion que no sabemos cuando terminara exactamente
// function irACasa(callback) {
//     console.log('camino a casa...');
//     console.log('llegue a casa');

//     // veamos que es callback
//     console.log(callback);
//     if (callback !== undefined) {
//         callback();
//     } else {
//         console.log('y no hizo nada');
//     }
// }

// function avisar() {
//     console.log('ya llegue');
// }

// function dormir() {
//     console.log('a mimir');
// }

// // Como irian a casa y luego avisarian?
// irACasa(avisar);

// // Como dormir y luego ir a casa?
// dormir();
// irACasa();


// Recibe una lista de roles, que regresa?
function generateRoleValidator(roles) {
    return (rol) => {
        if (roles.includes(rol)) {
            console.log('autorizado');
        } else {
            console.log('denegado');
        }
    }
}

function generateValidator(roles) {
    return (rol) => {
        if (roles.includes(rol)) {
            console.log('autorizado');
        } else {
            console.log('denegado');
        }
    }
}

// function onlyAdmin(rol) {
//     if (['admin'].includes(rol)) {
//         console.log('autorizado');
//     } else {
//         console.log('denegado');
//     }
// }

const onlyAdmin = generateRoleValidator(['admin'])

const onlyUserAndAdmin = generateRoleValidator(['admin', 'user'])

const onlyDesarrolador = generateRoleValidator(['desarrollador'])

onlyUserAndAdmin('user') // autorizado
onlyUserAndAdmin('admin') // autorizado
onlyUserAndAdmin('desarrollador') // denegado

onlyDesarrolador('desarrollador') // autorizado


const usuarios = [
    {
        nombre: 'balan',
        rol: 'admin'
    },
    {
        nombre: 'jairo',
        rol: 'desarrollador'
    },
    {
        nombre: 'marco',
        rol: 'calidad'
    }
]

const roles = usuarios.map(usuario => usuario.rol);

const usuariosValidos = ['admin', 'desarrollador', 'calidad'];
const validateUsers = generateValidator(usuariosValidos);

const productosValidos = ['sabritas', 'switch'];
const validadorDeProductos = generateValidator(productosValidos);


