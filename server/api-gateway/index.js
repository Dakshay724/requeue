const fastapi=require('fast-gateway');
const jwt=require('jsonwebtoken')

require('dotenv').config();




const port =9000;
const server = fastapi({
    //middlewares:[authentication],
    routes: [
    {
        prefix: '/admin',
        target: 'http://localhost:8001',
        //methods:['POST','GET']
        //middlewares:[authentication],
        hooks:{}
      },
      {
        prefix: '/order',
        target: 'http://localhost:8002',
        hooks:{}
      },
      {
        prefix: '/owner',
        target: 'http://localhost:8003',
        hooks:{}
      },
      {
        prefix: '/payment',
        target: 'http://localhost:8004',
        hooks:{}
      },
      {
        prefix: '/user',
        target: 'http://localhost:8005',
        hooks:{}
      }
]
  })
  
  
  server.get('/test',(req,res)=>res.send('we called fastapi'));
  server.start(port).then(server=>console.log(`fastapi is running at ${port}`)).catch(error=>console.log(error))

