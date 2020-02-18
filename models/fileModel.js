const mongoose = require('mongoose');

var fileSchema = mongoose.Schema({
    originalName : {
        type : String
    },
    fileName : {
        type : String
    },
    path : {
        type : String
    },
    size : {
        type : String
    },
    mimetype : {
        type : String
    }
});

mongoose.model('File',fileSchema);