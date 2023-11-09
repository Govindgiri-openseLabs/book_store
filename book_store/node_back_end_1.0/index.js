// reqiure basic node modules
const express=require('express');
const mongoose=('mongoose');
const cors=require('cors');
const conn=require("./db_connections/mongo_db_conn/conn")
require('dotenv').config();

// cross origin resourse sharing from diffrent domain middleware (cors) 
const app=express();
app.use(cors());
app.use(express.json());

// connect data base
conn();

// https request from client end

app.use('/book',require("./routes/book_route/book_auth.js"));

// server connection
const PORT=process.env.port||5000;
app.listen(PORT,()=>{
    console.log(`server listen at ${PORT}`);
})