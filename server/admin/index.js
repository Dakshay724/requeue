const express=require('express');

const app=express();

const port =8001

app.get('/admin',(req,res)=>{
    let data={
        name:'akshay',
        Number:'9766619238'
    }
    res.status(200).json(data)
})

app.listen(port,(req,res)=>{
    console.log('listening on port',port)
})