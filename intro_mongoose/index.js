const mongoose = require('mongoose');

const DB_USER = 'rafael';
const DB_HOST = 'cluster0.mohlf.mongodb.net';
const DB_NAME = 'kodemia';
const DB_PASSWORD = 'kodemia123';

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength:2,
        maxlength:100,
        required: true,
    },
    lastName: {
        type: String,
        minlength:2,
        maxlength:100,
        required: true,
    },
    age: {
        type: Number,
        min:0,
        max:120,
        required:true,
    },
    gender: {
        type:String,
        required:true,
        maxlength:1,
        enum:['m','f','x'],
    }
});

const Koder = mongoose.model('koder',koderSchema);

// const newKoder = new KoderModel ({

// });


//CONNECTION
mongoose
    .connect(URL)
    .then(async (connection)=>{
        console.log('Db Connected');
        //console.log(connection);

        await Koder.create({
            name: 'Marco',
            lastName: 'Fernandez',
            gender:'m',
            age:18,
        });

        //Consultar todos los koders
        const koders = await Koder.find({});
        console.log(koders);

    })
    .catch((error)=>{
        console.log(error);
    });


