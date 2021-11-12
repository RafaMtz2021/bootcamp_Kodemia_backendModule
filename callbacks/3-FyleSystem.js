const fs = require('fs');

function crearArchivo(nombre, contenido) {
    fs.writeFile(nombre, contenido, 'utf8', (error) => {
        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error(error)
        } else {
            console.log('Se creo el archivo correctamente');
        }
    });
}

function leer(nombre,encoding) {
    fs.readFile(nombre, encoding, (error, data) => {
        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error(error)
        } else {
            console.log(`El contenido del archivo es:\n${data}`);
        }
      });
}

function editar(nombre,contenido) {
    fs.appendFile(nombre, contenido, 'utf8', (error) => {
        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error(error)
        } else {
            console.log('Se actualizó el archivo correctamente');
        }
    });
}

function borrar(nombre) {
    fs.unlink(nombre,(error) =>{
        if(error){
            console.error(error);
        }else{
            console.log('El archivo se eliminó correctamente');
        }
    })
}

function renombrar(oldName,newName) {
    fs.rename(oldName,newName,(error) =>{
        if(error){
            console.error(error);
        }else{
            console.log('El archivo se renombró correctamente');
        }
    })
}


crearArchivo('ejercicio.txt', 'Archivo creado correctamente\n');
leer('ejercicio.txt','utf8');
// editar('ejercicio.txt', 'Archivo actualizado correctamente\n');
// renombrar('ejercicio.txt','tarea.txt');
// leer('ejercicio.txt','utf8');
// borrar('tarea.txt');
