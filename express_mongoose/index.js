const mongoose = require('mongoose');
const Koder = require('./koder.models');
const express = require('express');

const PORT = 8080;

const DB_USER = 'rafael';
const DB_HOST = 'cluster0.mohlf.mongodb.net';
const DB_NAME = 'kodemia';
const DB_PASSWORD = 'kodemia123';

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express ();

app.get('/',(req,res) =>{
    res.end('endpoint de express')
});


app.get('/koders', async(req,res) =>{
    const gender = req.query.gender;
    const koders = await Koder.find({"gender": gender});
    console.log(koders);
    //Mandar una respuesta
    res.json(koders)
});

app.post('/koders', async(req,res) =>{
    const newData = req.query
    await Koder.create({
        "name":newData.name,
        "lastName":newData.lastName,
        "age": newData.age,
        "gender": newData.gender,
    });
    console.log(newData);
    // //Mandar una respuesta
    res.statusCode = 201;
    res.json({"newKoder":newData})
});

//CONNECTION
mongoose
    .connect(URL)
    .then(async (connection)=>{
        console.log('Db Connected')

        //Arrancamos el servidor , cuando ya nos conectamos a la DB
        app.listen(PORT,() =>{
            console.log('Server is running');;
        })

    })
    .catch((error)=>{
        console.log(error);
    });


