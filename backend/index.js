const express=require('express');
const cors=require("cors");
const app=express();
app.use(cors());
app.listen(8080,(error)=>{
        if(error){
            console.error("error in setting up the server:",error);
        }
})
