const mysql=require("mysql");
require('dotenv').config();


const db=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
});

module.exports=db;









