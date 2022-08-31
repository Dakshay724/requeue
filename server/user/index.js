const express=require('express');
const UserRoute=require("./routes/registration")
require('dotenv').config();


const app=express();

const port =process.env.PORT;

app.use(express.json())
app.use('/api/user',UserRoute)


app.listen(port,(req,res)=>{
    console.log('listening on port',port)
    
         
})