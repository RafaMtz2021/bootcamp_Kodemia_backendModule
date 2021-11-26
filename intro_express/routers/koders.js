const express = require('express');
const fs = require('fs/promises');
const ENCODING = 'utf8';
const KODERS_FILE = 'koders.json';
const router = express.Router();

// ROUTES KODERS
router.get('/', async (req, res) => {
    const koders = await loadKoders();

    res.json(koders);
});

router.post('/', async (req, res) => {
    const koders = await loadKoders();
    const newKoder = req?.body;
    console.log(newKoder);
    if (!isValidKoder(newKoder)) {
        res.statusCode = 400;
        res.end('Please provide a valid Koder object');

        return
    }
    res.statusCode = 201;
    koders.push(newKoder);
    await saveKoders(koders);

    res.json(newKoder);
})

router.patch('/:name', async (req, res) => {
    const koders = await loadKoders();

    const koderName = req.params.name;
    const newKoderData = req?.body;

    if (!isValidKoder(newKoderData)) {
        res.statusCode = 400;
        res.end('Please provide a valid Koder object');
    }

    let koderFound = false;
    let modifiedKoder = {}
    const modifiedKoders = koders.map((koder) => {
        if (koder.nombre === koderName) {
            koderFound = true;

            koder.nombre = newKoderData.nombre;
            koder.genero = newKoderData.genero;

            modifiedKoder = { ...koder };
        }
        return koder
    })

    if (!koderFound) {
        res.statusCode = 404;
        res.end('Koder Not Found');
        return
    }

    await saveKoders(modifiedKoders);
    res.json(modifiedKoder);
});

router.get('/:name', async (req, res) => {
    const koders = await loadKoders();
    const koderName = req.params.name;
    const koderIndex = koders.findIndex((koder) => koder.nombre === koderName);

    if(koderIndex === -1){
        res.statusCode = 404;
        res.end('Koder Not Found');

        return
    }
    const result = {nombre: koders[koderIndex].nombre,
                    genero: koders[koderIndex].genero
    }
    console.log(result);
    res.statusCode = 200;
    res.json(result);
});

router.delete('/:name', async (req, res) => {
    const koders = await loadKoders();
    const koderName = req.params.name;

    const koderIndex = koders.findIndex((koder) => koder.nombre === koderName);

    if(koderIndex === -1){
        res.statusCode = 404;
        res.end('Koder Not Found');

        return
    }

    koders.splice(koderIndex,1);
    await saveKoders(koders);
    
    res.statusCode = 200;
    res.json({response:"successful"});
});


// HELPERS
/*
    Loads KODERS_FILE and returns the koders property value
*/
function isValidKoder(koder) {
    return koder.nombre && koder.genero
}

async function loadKoders() {
    try {
        const content = await fs.readFile(KODERS_FILE, ENCODING);
        const parsedFile = JSON.parse(content);
        return parsedFile.koders
    } catch (error) {
        console.error('No se pudieron cargar los koders');
        console.error(error);

        return []
    }
}

/*
    Saves koders value in a new object which is written to KODERS_FILE
*/
async function saveKoders(koders) {
    try {
        const newObject = { koders } // creamos un nuevo objeto
        const newContent = JSON.stringify(newObject, null, 4); // para mantener formato de JSON

        await fs.writeFile(KODERS_FILE, newContent, ENCODING);
    } catch (error) {
        console.error('No se pudieron guardar los koders');
        console.error(error);
    }
}

module.exports = router;
