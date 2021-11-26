const express = require('express');
const routerKoders = require('./routers/koders');
const routerMentors = require('./routers/mentors');
const PORT = 8080;

const app = express();
// Middleware para convertir request a JSON
app.use(express.json());

//ROUTE KODERS
app.use('/koders',routerKoders);
//ROUTE MENTORS
app.use('/mentors',routerMentors);

app.listen(PORT, () => {
    console.log(`Koders API listening at http://localhost:${PORT}`)
});


