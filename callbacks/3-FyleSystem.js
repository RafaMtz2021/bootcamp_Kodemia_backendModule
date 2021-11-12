const fs = require('fs');

fs.writeFile('./carpeta/hola.txt', 'Hola Koders', 'utf8', (error) => {
    if (error) { // {error: 'Todo salio mal'} | false | undefined
        console.error(error)
    } else {
        console.log('Se creo el archivo correctamente');
    }
});