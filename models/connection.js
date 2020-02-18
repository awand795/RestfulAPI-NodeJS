const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bebek', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }, (err) => {
    if (!err) {
        console.log("Connected to database!!!");
    }
    else {
        console.log(err);
    }
});

const Absen = require('./absenModel');
const Schedule = require('./scheduleModel');
const Token = require('./tokenModel');
const File = require('./fileModel');