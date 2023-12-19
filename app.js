const express = require('express')
const app = express();

const PORT = process.env.PORT ||  9000;

app.get('/',(req,res)=>{
    res.json({message:"Hey!! I am learning GitHub Actions"})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`);
})