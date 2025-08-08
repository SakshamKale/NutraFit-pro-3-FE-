const express=require('express');
const { handleInsertFormrData, handleGetFormrData } = require('../Controller/Form');

const formrouter=express.Router()

formrouter.post('/addformdata',handleInsertFormrData)
formrouter.get('/getformdata',handleGetFormrData)

module.exports={formrouter}