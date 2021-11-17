const fs = require('fs').promises;
const encoding = 'utf-8';

const makeDirectoryWithFiles = async(path,name,content) => {
    try {
        await fs.mkdir(path,{recursive:true});
        console.log('Directorio con archivo creado OK');
        await fs.writeFile(name,content,encoding);
        console.log('Archivo creado OK');
    } catch (error) {
        console.error(error);
    }
}

const makeEmptyDirectory = async(path) => {
    try {
        await fs.mkdir(path,{recursive:true});
        console.log('Directorio vacío creado OK');
    } catch (error) {
        console.error(error);
    }
}

const readDirectory = async(path) => {
    try {
        const result = await fs.readdir(path);
        console.log(`El contenido del directorio ${path} es: \n${result}`);
    } catch (error) {
        console.error(error);
    }
}

const deleteEmptyDirectory = async(path) =>{
    try {
        await fs.rmdir(path);
        console.log(`El directorio: ${path} fue eliminado correctamente`);
    } catch (error) {
        console.error(error);
    }
}

const deleteDirectoryWithFiles = async(path) =>{
    try {
        await fs.rm(path,{recursive:true});
        console.log(`El directorio: ${path} fue eliminado correctamente`);
    } catch (error) {
        console.error(error);
    }
}

const main = async () => {
    await makeDirectoryWithFiles('parentDirectory/childFolder1/','parentDirectory/childFolder1/file1.txt','Contenido archivo 1');
    await makeEmptyDirectory('parentDirectory/childFolder2/');
    await makeEmptyDirectory('parentDirectory/childFolder3/');
    await makeEmptyDirectory('parentDirectory/childFolder4/');
    await makeDirectoryWithFiles('parentDirectory/childFolder5/','parentDirectory/childFolder5/file2.txt','Contenido archivo 5');
    await readDirectory('parentDirectory');
    await deleteEmptyDirectory('parentDirectory/childFolder4/');
    await readDirectory('parentDirectory');
    await deleteDirectoryWithFiles('parentDirectory/childFolder5/')
    await readDirectory('parentDirectory');
}
main();