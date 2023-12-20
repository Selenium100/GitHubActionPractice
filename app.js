const express = require('express')
const app = express();

const PORT = process.env.PORT ||  9000;
//one comment
// two comment

app.get('/',(req,res)=>{
    res.json({message:"Hey!! I am leaarning GitHub Actions"})
})

app.listen(PORT, ()=>{
    console.log(`Server is running onn localhost:${PORT}`);
})

module.exports = app;