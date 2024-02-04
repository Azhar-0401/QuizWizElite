const express= require('express');
const mongoose=require('mongoose');
const jwt = require('jsonwebtoken');
const {SECRET}=require('../Middleware/auth');
const {authfunction}=require('../Middleware/auth');
const {User,Admin,quiz}=require('../db/index')
const router=express.Router();

router.post('/signup', async(req,res)=>{
    const {username,password}=req.body;
    const valid=await User.findOne({username});
    if(valid){
        res.json({Message:"The User is Already Exits...!!"});
    }
    else{
        const newuser= new User({username,password});
        await newuser.save();
        const token=jwt.sign({username,role:'User'},SECRET,{expiresIn:'1h'});
        res.json({Message:"The user login successfull",Token:token});
    }
})
router.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    const user= await User.findOne({username, password});
    if(user){
        const token=jwt.sign({username,role:"User"},SECRET,{expiresIn:'1h'});
        res.json({Message:"Loggin Successfull...!!",Token:token});
    }
    else{
        res.status(403).json({Message:"Invalid Detailed Entered...!!"});
    }
})
router.get('/quizez',authfunction,async(req,res)=>{
    const quizez= await quiz.find({published:true});
    res.json({quizez});
})
router.post('/quizez/:quizid',authfunction,async(req,res)=>{
    const quiz= await quiz.findById(req.params.quizid);
    console.log(quiz);
    if(quiz){
        const user= await User.findOne({username:req.body.username});
        if(user){
            user.parchesedquiz.push(quiz);
            await user.save();
            res.json({Message:"quiz Parched Successfully"});
        }else{
            res.status(403).json({Message:"User Not found"}); 
        }
    }
    else{
            res.status(404).json({Message:"quiz Not found"});
    }
})
router.get('/parchesedquiz',authfunction,async(req,res)=>{
    const user=await User.findOne({username:req.user.username}).populate('parchesedquiz');
    if(user){
        res.json({parchesedquiz:user.parchesedquiz || []});
    }
    else{
        res.status(403).json({Message:"User Not Found....!!"});
    }
})
module.exports= router
