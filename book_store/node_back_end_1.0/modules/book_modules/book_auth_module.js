const  {add_book_api,get_book_by_title_api,get_all_book_api,update_book_api,delete_book_api}=require("../../api/book_api/book_auth_api.js");
const validator=require('validator');

const get_all_books=async (req,res)=>{
    
    try{  
         const book_title=req?.query?.title;
         let data;
         if(book_title){
             data=await get_book_by_title_api(book_title);   
             if(!data)
           return res.status(400).send("book not found");
            } 
         else{
                data=await get_all_book_api();
                if(!data.length)
                return res.status(400).send("book store is empty");
            }

            return res.status(200).send(data);
       }
    catch
      {
        res.status(400).send("books not found !");
     }
 }

const get_book_by_title=async (req,res)=>{
    try{ 
         let book_title=req?.body?.title;
          console.log("pp",book_title);
          if(!book_title){
            return res.status(400).send("invalid book title"); 
          }
          const data=await get_book_by_title_api(book_title);
          if(!data)
           return res.status(400).send("book not register");
          else 
            return res.status(200).send(data);
       }
    catch
      {
        res.status(400).send("invalid book name");
     }
 }




const add_book=async(req,res)=>{
 try{   let book_data={};
        book_data.title=req?.body?.title||null;
        book_data.author=req?.body?.author||null;
        book_data.summary=req?.body?.summary||null;
        if(!book_data.title||!book_data.author||!book_data.summary){
            return res.status(400).send("incomplete book details");
        }
        try{
            const data= await add_book_api(book_data);
            if(!data)
            return res.status(400).send("book already exist");
            else
             return res.status(200).send(data);
        }
        catch(error)
        {
             return res.status(500).send({error:"book not added"});
        }
        
    }
    catch(error)
    {   
       return res.status(400).send({error:"invalid book"});
    }
}


const update_book=async (req,res)=>{
    try{   
           const book_title=req?.body?.title;
           if(!book_title) 
            return res.status(400).send("invalid book title");
           const Data=await get_book_by_title_api(book_title);
           if(!Data)
           return res.status(400).send("book not register");
           let new_data={};
           new_data.title=book_title; 
           new_data.author=req?.body?.author||Data.author;
           new_data.summary=req?.body?.summary||Data.summary;

           try{   
                  const updated_data=await update_book_api(new_data);
                 if(updated_data)
                 return res.status(200).send(updated_data);
                 else res.status(500).send("book not updated");  
           }
           catch(error)
           {
               return res.status(400).send("book not updated");
           }
       }
       catch(error)
       {   res.status(400).send("book not found");
   
       }
   }


   const delete_book=async (req,res)=>{
    try{
             const book_title=req?.body?.title;
             if(!book_title) 
              return res.status(400).send("invalid book title");
             const Data=await get_book_by_title_api(book_title);
             if(!Data)
             return res.status(400).send("book not register");
                 
             try{
                    const data=await delete_book_api(book_title);
                  if(data) return res.status(200).send("book deleted");
                  else return res.status(500).send("book not deleted");
             }
             catch(error)
              {
                 return res.status(400).send("book not deleted.");
              }


       }
       catch(error)
       {   
          return res.status(500).send("invalid book");
       }
   }



module.exports={get_all_books,get_book_by_title,add_book,update_book,delete_book};