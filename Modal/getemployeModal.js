const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const getemployesSchema = new Schema(
   {
       id :{
           type :Number,
           required:true
      
       },
       profilepic :{
           type :String,
           required:true
      
       },
       name :{
           type :String,
           required:true
      
       },
     
       phone :{
           type :Number,
           required:true
      
       },
       jpiningdate :{
           type :Number,
           required:true
      
       },
       role :{
           type :String,
           required:true
      
       }
   }
    )

    module.exports = mongoose.model('getemployes',getemployesSchema,'getemployes')