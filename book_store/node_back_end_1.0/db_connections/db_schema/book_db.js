const { ObjectId, Timestamp } = require("mongodb");
const mongoose=require("mongoose");
const user_schema=new mongoose.Schema(
    {
        title:{
            type:String,
            unique:true,
            required:true,
        },
        author:{
            type:String,
            required:true,
        },
        summary:{
            type:String,
            required:true,
        },
    },
    {versionKey:false}
);

module.exports=mongoose.model("book_collection",user_schema);