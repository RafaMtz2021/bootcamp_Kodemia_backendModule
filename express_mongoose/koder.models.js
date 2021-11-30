const mongoose = require('mongoose');

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

module.exports = Koder