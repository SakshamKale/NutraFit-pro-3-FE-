  const moongoose=require('mongoose');
  
  const FormSchema=new moongoose.Schema({
  Name:{type:String,required:true},
  Age:{type:String,required:true},
  Gender:{type:String,required:true},
  Hft:{type:String,required:true},
  Hin:{type:String,required:true},
  Wei:{type:String,required:true},
  FG:{type:String,required:true},
  AL:{type:String,required:true},
  AMC:{type:String}
  })
  const FormData=moongoose.model('Form',FormSchema);
  module.exports={FormData}