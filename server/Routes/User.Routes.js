const express=require('express');
const {handleInsertUserData,handleCheckUserData}=require('../Controller/User.Controller')
const datarouter=express.Router()

datarouter.post('/adddata',handleInsertUserData)
datarouter.post('/getdata',handleCheckUserData)

module.exports={datarouter}