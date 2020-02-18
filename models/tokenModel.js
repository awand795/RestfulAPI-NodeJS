const mongoose = require('mongoose');

var tokenSchema = mongoose.Schema({
    name : {
        type:String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    token : {
        type :String,
        unique : true,
        required : true
    }
});

mongoose.model("Token", tokenSchema);