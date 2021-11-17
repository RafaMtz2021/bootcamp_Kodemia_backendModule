const fs = require('fs').promises;
const encoding = 'utf-8';

async function crearArchivo(nombre, contenido) {
    try {
        await fs.writeFile(nombre, contenido,encoding);
        console.log('Archivo creado OK');
    } catch (error) {
        console.error(error);
    }
}

async function leerArchivo(nombre) {
    try {
        const result = await fs.readFile(nombre, encoding);
        console.log(`El contenido del archivo es:\n${result}`);
    } catch (error) {
        console.error(error);
    }
}

async function editarArchivo(nombre,contenido) {
    try {
        await fs.appendFile(nombre, contenido);
        console.log('Archivo editado OK');
    } catch (error) {
        console.error(error);
    }
}

async function renombrarArchivo(oldName,newName) {
    try {
        await fs.rename(oldName,newName);
        console.log('Archivo renombrado OK');
    } catch (error) {
        console.error(error);
    }
}

async function eliminarArchivo(nombre) {
    try {
        await fs.unlink(nombre);
        console.log('Archivo eliminado OK');
    } catch (error) {
        console.error(error);
    }
}

const main = async () => {
    await crearArchivo('asyncAwait.txt', 'Archivo creado correctamente\n');
    await leerArchivo('asyncAwait.txt');
    await editarArchivo('asyncAwait.txt','Nuevo contenido 1\n');
    await leerArchivo('asyncAwait.txt');
    await editarArchivo('asyncAwait.txt','Nuevo contenido 2\n');
    await leerArchivo('asyncAwait.txt');
    await editarArchivo('asyncAwait.txt','Nuevo contenido 3\n');
    await leerArchivo('asyncAwait.txt');
    await renombrarArchivo('asyncAwait.txt','newAsyncAwait');
    await eliminarArchivo('newAsyncAwait');
}
main();





