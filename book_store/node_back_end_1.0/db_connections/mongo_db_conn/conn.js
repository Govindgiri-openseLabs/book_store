require('dotenv').config();
const mongoose=require("mongoose");
const MONGO_URL=process.env.mongo_url;

const conn=async()=>{
    await mongoose.connect("mongodb+srv://govindgirigoswami1501:Govind1501@cluster0.bzdnedh.mongodb.net/my_db",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("mongodb connected");
}).catch((error)=>{
    console.log("db connection failed",error);
})
}

module.exports=conn;
