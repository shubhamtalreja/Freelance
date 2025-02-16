const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
name:{type: String, required:true},
email:{type: String,required:true,unique:true},
password:{type:String, required:true},
role:{type:String, enum:['buyer','seller'],required:true},
services:[{type:mongoose.Schema.Types.ObjectId, ref:'Service'}],
description: String,
rating: { type: Number, default: 0 }
},{timestamps:true});


module.exports = mongoose.model('User',userSchema);