const book_data=require("../../db_connections/db_schema/book_db");
const get_book_by_title_api=async(title)=>{
    try{   console.log("ok");
           const data=await book_data.findOne({"title":title});
           return data;
    }
    catch(error)
    { 
        return 0;
    }
}

const get_all_book_api=async ()=>{
    try{   
           const data=await book_data.find();
           
           return data;
    }
    catch(error){
       return 0;
    }
}
const add_book_api=async(data)=>{
    try{ console.log("booook",data);   
         const Data=await book_data.create(data);
            return Data;
    }
    catch(error){
        return 0;
    }
}

const update_book_api=async(data)=>{
    try{         console.log('jj',data);      
            const Data=await book_data.updateOne({"title":data.title},{$set:{"author":data.author,"summary":data.summary}});
            return Data;
    }
    catch(error){
        return 0;
    }
}
const delete_book_api=async(title)=>{
    try{   
            const Data=await book_data.deleteOne({"title":title});
            return Data;
    }
    catch(error){
        return 0;
    }
}
module.exports= {add_book_api,get_book_by_title_api,get_all_book_api,update_book_api,delete_book_api};