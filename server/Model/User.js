const moongoose=require('mongoose');

const userData=new moongoose.Schema({
email:{type:String,required:true},
password:{type:String,required:true}

})
const UserData=moongoose.model('User',userData);
module.exports={UserData}