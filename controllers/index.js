const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const tokenModel = mongoose.model('Token');
const randomstring = require('randomstring');

router.get('/',(req,res)=>{
    res.render('index/index');
});

router.post('/registoken',(req,res)=>{
    if(req.body){
        var tokenmodel = new tokenModel();
        tokenmodel.name = req.body.name;
        tokenmodel.email = req.body.email;
        tokenmodel.token = randomstring.generate({length:64,charset : 'alphanumeric'});
        tokenmodel.save((err,doc)=>{
            if(!err){
                res.json({status : "success", key_token : tokenmodel.token, message : "You're successfully sign up, now start using api's with your own key token"})
            }
            else{
                res.json({status:"failed", message : err});
            }
        });
    }
    else{
        res.json({status:"failed", message : "you're missing something, gonna back and try again"});
    }
});

module.exports = router;