const express = require('express');
const fs = require('fs/promises');
const ENCODING = 'utf8';
const MENTORS_FILE = 'mentors.json';
const router = express.Router();

// ROUTES MENTORS
router.get('/', async (req, res) => {
    const mentors = await loadMentors();

    res.json(mentors);
});

router.post('/', async (req, res) => {
    const mentors = await loadMentors();
    const newMentor = req?.body;
    console.log(newMentor);
    if (!isValidMentor(newMentor)) {
        res.statusCode = 400;
        res.end('Please provide a valid Mentor object');

        return
    }
    res.statusCode = 201;
    mentors.push(newMentor);
    await saveMentors(mentors);

    res.json(newMentor);
})

router.patch('/:name', async (req, res) => {
    const mentors = await loadMentors();

    const mentorName = req.params.name;
    const newMentorData = req?.body;

    if (!isValidMentor(newMentorData)) {
        res.statusCode = 400;
        res.end('Please provide a valid Mentor object');
    }

    let mentorFound = false;
    let modifiedMentor = {}
    const modifiedMentors = mentors.map((mentor) => {
        if (mentor.nombre === mentorName) {
            mentorFound = true;

            mentor.nombre = newMentorData.nombre;
            mentor.genero = newMentorData.genero;

            modifiedMentor = { ...mentor };
        }
        return mentor
    })

    if (!mentorFound) {
        res.statusCode = 404;
        res.end('Mentor Not Found');
        return
    }

    await saveMentors(modifiedMentors);
    res.json(modifiedMentor);
});

router.get('/:name', async (req, res) => {
    const mentors = await loadMentors();
    const mentorName = req.params.name;
    const mentorIndex = mentors.findIndex((mentor) => mentor.nombre === mentorName);

    if(mentorIndex === -1){
        res.statusCode = 404;
        res.end('Mentor Not Found');

        return
    }
    const result = {nombre: mentors[mentorIndex].nombre,
                    genero: mentors[mentorIndex].genero
    }
    console.log(result);
    res.statusCode = 200;
    res.json(result);
});

router.delete('/:name', async (req, res) => {
    const mentors = await loadMentors();
    const mentorName = req.params.name;

    const mentorIndex = mentors.findIndex((mentor) => mentor.nombre === mentorName);

    if(mentorIndex === -1){
        res.statusCode = 404;
        res.end('Mentor Not Found');

        return
    }

    mentors.splice(mentorIndex,1);
    await saveMentors(mentors);
    
    res.statusCode = 200;
    res.json({response:"successful"});
});


// HELPERS
/*
    Loads MENTORS_FILE and returns the mentors property value
*/
function isValidMentor(mentor) {
    return mentor.nombre && mentor.genero
}

async function loadMentors() {
    try {
        const content = await fs.readFile(MENTORS_FILE, ENCODING);
        const parsedFile = JSON.parse(content);

        return parsedFile.mentors
    } catch (error) {
        console.error('No se pudieron cargar los mentores');
        console.error(error);

        return []
    }
}

/*
    Saves koders value in a new object which is written to MENTORS_FILE
*/
async function saveMentors(mentors) {
    try {
        const newObject = { mentors } // creamos un nuevo objeto
        const newContent = JSON.stringify(newObject, null, 4); // para mantener formato de JSON

        await fs.writeFile(MENTORS_FILE, newContent, ENCODING);
    } catch (error) {
        console.error('No se pudieron guardar los mentores');
        console.error(error);
    }
}

module.exports = router;
