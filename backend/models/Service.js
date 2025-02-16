const mongoose = require('mongoose');

const serviceModel = new mongoose.Schema({
    name:{type:String, required:true},
    description: String
},{timestamps:true});

module.exports = mongoose.model('Service',serviceModel);