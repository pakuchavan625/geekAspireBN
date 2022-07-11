const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employesSchema = new Schema(
   {
       id :{
           type :Number,
           required:true
      
       },
       name :{
           type :String,
           required:true
      
       },
       email :{
           type :String,
           required:true
       
       },
       phone :{
           type :Number,
           required:true
      
       }
   }
    )

    module.exports = mongoose.model('employes',employesSchema,'employesDetails')