const express = require('express');
const app = express();
const conn = require('./models/connection');
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const indexController = require('./controllers/index');
const apiController = require('./controllers/api');
const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));

app.set('views', path.join(__dirname+'/views/'));
app.use(express.static(path.join(__dirname+'/public/')));

app.engine('hbs',exphbs({
    extname : 'hbs',
    defaultLayout : 'mainLayout',
    layoutsDir : __dirname+"/views/layout/"
}));
app.set('view engine','hbs');

app.use('/',indexController);
app.use('/api/v1/',apiController);

app.listen(PORT,()=>{
    console.log("Application running on port "+PORT);
});