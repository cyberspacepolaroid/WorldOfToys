const express = require('express')
const cors= require('cors')
const app=express();


const products=require("./Data/Products");

app.use(express.json());
app.use(cors());
app.get("/", (req, res)=>{
    res.send("Добро пожаловать")
})
app.get("/products", (req, res)=>{
    res.send(products);
});


const PORT = process.env.PORT || 4444








const start=async() =>{
    try{ 
        
        app.listen(PORT, ()=> console.log('ok!'))
    } catch (e){
        console.log(e)
    }

    
}

start() 




