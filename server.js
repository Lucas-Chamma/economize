require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const fileupload = require('express-fileupload');

mongoose.connect(process.env.DATABASE)

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) =>{
    console.log('Erro:',error.message);
})

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(fileupload());

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.send('Abn');
})

app.listen(process.env.PORT,()=>{
    console.log(`${process.env.BASE}`)
})