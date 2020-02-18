const mongoose = require('mongoose');

var scheduleSchema = mongoose.Schema({
    nameClass : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    timeStart : {
        type : String,
        required : true
    },
    timeEnd : {
        type : String,
        required : true
    }
});

mongoose.model('Schedule',scheduleSchema);