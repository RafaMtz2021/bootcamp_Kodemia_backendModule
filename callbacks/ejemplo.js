const empleados = [
    {
        id:1,
        nombre:'Rafael'
    },
    {
        id:2,
        nombre:'José'
    },
    {
        id:3,
        nombre:'María'
    },
];

const salarios = [
    {
        id:1,
        salario:50000
    },
    {
        id:2,
        salario:35000
    },
];

const getEmpleado = ( id , callback) =>{
    const empleado = empleados.find(e => e.id === id)?.nombre;

    if ( empleado ){
        callback(null,empleado);
    }else{
        callback(`El empleado con id ${id} no existe`);
    }
}

getEmpleado(4,( err, empleado )=>{
    if( err ){
        console.log('ERROR!!!')
        return console.log( err )
    }
    console.log( empleado )
})

const getSalario = ( id , callback) =>{
    const salario = salarios.find(s => s.id === id)?.salario;

    if ( salario ){
        callback(null,salario);
    }else{
        callback(`El salario con id ${id} no existe`);
    }
}

getSalario(2,( err, salario )=>{
    if( err ){
        console.log('ERROR!!!')
        return console.log( err )
    }
    console.log( salario )
})

