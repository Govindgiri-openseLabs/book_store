const express=require('express');
const router=express.Router();
const {get_all_books,get_book_by_title,add_book,update_book,delete_book}=require('../../modules/book_modules/book_auth_module.js')

router.route('/get/:title').get(get_book_by_title);
router.route('/get').get(get_all_books);
router.route('/add').post(add_book);
router.route('/update').patch(update_book);
router.route('/delete').delete(delete_book);


module.exports=router;