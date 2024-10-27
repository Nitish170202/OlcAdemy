const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const DisplayData = require('./Routes/DisplayData');
const Auth = require('./Routes/Auth')
require('./DBconnect');
const { default: mongoose, Mongoose } = require('mongoose');
const { redirect } = require('react-router-dom');
const { default: axios, Axios } = require('axios');

const PORT = process.env.PORT || 5000


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());



app.use(DisplayData);





app.get('/home' , (req,res)=>{
    res.send("home fresh");
})
app.listen(PORT);