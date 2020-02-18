const mongoose = require('mongoose');

var absenSchema = mongoose.Schema({
    nameStudent : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    nameClass : {
        type : String,
        required : true
    },
    absen : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
});

mongoose.model('Absen',absenSchema);