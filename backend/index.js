const express=require('express');
const cors=require("cors");
const app=express();
const mongoose = require('mongoose');


app.use(cors());

require('dotenv').config();

const mongoURI = process.env.MONGO_URI;


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
});


app.listen(8080,(error)=>{
        if(error){
            console.error("error in setting up the server:",error);
        }
})
