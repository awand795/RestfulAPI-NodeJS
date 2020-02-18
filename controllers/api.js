//Inisiasi variabel
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const scheduleModel = mongoose.model('Schedule');
const tokenModel = mongoose.model('Token');
const absenModel = mongoose.model('Absen');
const fileModel = mongoose.model('File');
const fs = require('fs');
const {promisify} = require('util');
const unlikAsync = promisify(fs.unlink);

//Multer For uploading file into folder
const Multer = require('multer');
var storage = Multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,__dirname+'/uploads');
    },
    filename : function(req,file,cb){
        cb(null,Date.now()+file.originalname);
    }
});

var upload = Multer({storage:storage}).single('file');


//function for checking api key, if api key is invalid the function will return false
function checkCredential(key_token,res,cb){
    tokenModel.findOne({token : key_token}, function(err,doc){
        if(doc){
            cb(doc);
        }
        else{
            return res.json({status : false, message : "Invalid token key, check again your token"});
        }
    });
}

//Router Untuk endpoint class, example http://localhost:3000/api/v1/class/
router.get('/class',(req,res)=>{
    if(req.query.key_token){
        checkCredential(req.query.key_token,res,doc =>{
            if(req.query.id){
                scheduleModel.findById({_id:req.query.id},(err,doc)=>{
                    if(!err){
                        res.json({status : true, dataLength : doc.length, data : doc});
                    }
                    else{
                        res.json({status : false, message : err});
                    }
                });
            }
            else if(req.query.nameClass){
                scheduleModel.findById({nameClass:req.query.nameClass},(err,doc)=>{
                    if(!err){
                        res.json({status : true, dataLength : doc.length, data : doc});
                    }
                    else{
                        res.json({status : false, message : err});
                    }
                });
            }
            else{
                scheduleModel.find((err,doc)=>{
                    if(!err){
                        res.json({status : true, dataLength : doc.length, data : doc});
                    }
                    else{
                        res.json({status : false, message : err});
                    }
                });
            }
        });
    }
    else{
        res.json({status : false, message : "Please using token key to using Restful api services"});
    }
});

router.post('/class',(req,res)=>{
    if(req.query.key_token){
        checkCredential(req.query.key_token,res,doc=>{
            var newClass = new scheduleModel();
            newClass.nameClass = req.body.nameClass;
            newClass.date = req.body.date;
            newClass.timeStart = req.body.timeStart;
            newClass.timeEnd = req.body.timeEnd;
            newClass.save((err,doc)=>{
                if(!err){
                    res.json({status : true, message : "Successfully inserted New CLass Schedule", data : doc});
                }
                else{
                    res.json({status : false, message : err});
                }
            });
        })
    }
    else{
        res.json({status : false, message : "Please using token key to using Restful api services"});
    }
});

router.put('/class',(req,res)=>{
    if(req.query.key_token){
        checkCredential(req.query.key_token,res,doc=>{
            if(req.query.id){
                scheduleModel.findByIdAndUpdate({_id:req.query.id},req.body,{new : true},(err,doc)=>{
                    if(!err){
                        res.json({status : true, message : "Successfully updated a new class", data : doc});
                    }
                    else{
                        res.json({status:false, message : err});
                    }
                });
            }
            else{
                res.json({status : false, message : "Please use id off class to edit class from schedule"});
            }
        });
    }
    else{
        res.json({status : false, message : "Please using token key to using Restful api services"});
    }
});

router.delete('/class',(req,res)=>{
    if(req.query.key_token){
        checkCredential(req.query.key_token,res,doc=>{
            if(req.query.id){
                scheduleModel.findByIdAndRemove({_id:req.query.id},(err,doc)=>{
                    if(!err){
                        res.json({status : true, message : "Successfully deleted the class"});
                    }
                    else{
                        res.json({status : false, message : err});
                    }
                })
            }
            else{
                res.json({status : false, message : "Please use id off class to delete class from schedule"});
            }
        });
    }
    else{
        res.json({status : false, message : "Please using token key to using Restful api services"});
    }
});

//Router Untuk endpoint absen, example http://localhost:3000/api/v1/absen/
router.get('/absen',(req,res)=>{
    if(req.query.key_token){
        checkCredential(req.query.key_token, res, cb=>{
            if(req.query.nameClass && req.query.date){
                absenModel.find({nameClass : req.query.nameClass, date : req.query.date},(err,doc)=>{
                    if(!err){
                        res.json({status : true, dataLength : doc.length, data : doc});
                    }
                    else{
                        res.json({status : false, message : err});
                    }
                });
            }
            else if(req.query.id){
                absenModel.find({_id : req.query.id},(err,doc)=>{
                    if(!err){
                        res.json({status : true, dataLength : doc.length, data : doc});
                    }
                    else{
                        res.json({status : false, message : err});
                    }
                });
            }
            else{
                absenModel.find((err,doc)=>{
                    if(!err){
                        res.json({status : true, dataLength : doc.length, data : doc});
                    }
                    else{
                        res.json({status : false, message : err});
                    }
                });
            }
        });
    }
    else{
        res.json({status : false, message : "Please using token key to using Restful api services"});
    }
});

router.post('/absen',(req,res)=>{
    if(req.query.key_token){
        checkCredential(req.query.key_token,res,doc=>{
            var newAbsen = new absenModel();
            newAbsen.nameStudent = req.body.nameStudent;
            newAbsen.date = req.body.date;
            newAbsen.nameClass = req.body.nameClass;
            newAbsen.absen = req.body.absen;
            newAbsen.description = req.body.description;
            newAbsen.save((err,doc)=>{
                if(!err){
                    res.json({status:true, message : "Successfully inserted new Absen", data : doc});
                }
                else{
                    res.json({status:false,message : err});
                }
            });
        });
    }
    else{
        res.json({status : false, message : "Please using token key to using Restful api services"});
    }
});

router.put('/absen',(req,res)=>{
    if(req.query.key_token){
        checkCredential(req.query.key_token,res,doc=>{
            if(req.query.id){
                absenModel.findByIdAndUpdate({_id:req.query.id},req.body,{new : true},(err,doc)=>{
                    res.json({status : true, message : "Successfully updated a new absen", data : doc});
                });
            }
            else{
                res.json({status : false, message : "Please use id off absen to delete class from Absen"});
            }
        });
    }
    else{
        res.json({status : false, message : "Please using token key to using Restful api services"});
    }
});

router.delete('/absen',(req,res)=>{
    if(req.query.key_token){
        checkCredential(req.query.key_token,res,doc=>{
            if(req.query.id){
                absenModel.findByIdAndRemove({_id:req.query.id},(err,doc)=>{
                    if(!err){
                        res.json({status : true, message : "Successfully deleted the absen"});
                    }
                    else{
                        res.json({status : false, message : err});
                    }
                });
            }
            else{
                res.json({status : false, message : "Please use id off absen to delete class from Absen"});
            }
        });
    }
    else{
        res.json({status : false, message : "Please using token key to using Restful api services"});
    }
});

//Router Untuk endpoint material Sharing, example http://localhost:3000/api/v1/materialSharing/
router.get('/materialSharing',(req,res)=>{
    if(req.query.key_token){
        checkCredential(req.query.key_token,res,doc=>{
            if(req.query.id){
                fileModel.findById({_id:req.query.id},(err,doc)=>{
                    if(!err){
                        res.json({status:true,dataLength:doc.length,data : doc});
                    }
                    else{
                        res.json({status:false,message:err});
                    }
                });
            }
            else{
                fileModel.find((err,doc)=>{
                    if(!err){
                        res.json({status:true,dataLength:doc.length,data : doc});
                    }
                    else{
                        res.json({status:false,message:err});
                    }
                })
            }
        })
    }
    else{
        res.json({status : false, message : "Please using token key to using Restful api services"});
    }
});

router.post('/materialSharing',(req,res)=>{
    if(req.query.key_token){
        checkCredential(req.query.key_token,res,doc=>{
            upload(req,res,function(err){
                if(err){
                    res.json({status : false, errorDescription : err});
                }
                var newFile = new fileModel();
                newFile.originalName = req.file.originalname;
                newFile.fileName = req.file.filename;
                newFile.path = req.file.path;
                newFile.size = req.file.size;
                newFile.mimetype = req.file.mimetype;
                newFile.save((err, doc) => {
                    if(!err){
                        res.json({status:true,message:"success uploading file",dataLength:doc.length,data : doc});
                    }
                    else {
                        res.json({ status: false, message: "Error uploading file", errorDescription: err });
                    }
                });
            });
        });
    }
    else{
        res.json({status : false, message : "Please using token key to using Restful api services"});
    }
});


router.delete('/materialSharing',(req,res)=>{
    if(req.query.key_token){
        if(req.query.id){
            fileModel.findById({_id:req.query.id},(err,doc)=>{
                unlikAsync(doc.path);
                res.json({status:true, message: "Successfully deleted file"});
            });
        }
        else{
            res.json({status : false, message : "Please use id off file to delete file"});
        }
    }
    else{
        res.json({status : false, message : "Please using token key to using Restful api services"});
    }
});

module.exports = router;