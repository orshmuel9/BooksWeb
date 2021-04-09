const express = require('express');
const router = express.Router();
const bookBL=require('../models/bookBL');

//get all
router.route('/').get(async (req,resp)=>{
    let data=await bookBL.getAllBooks();
    return resp.json(data);
})

//get by id
router.route('/:id').get(async (req,resp)=>{
    let id=req.params.id;
    let data= await bookBL.getBookById(id);
    return resp.json(data);
})

//add book

router.route('/').post(async(req,resp)=>{
    let newbook=req.body;
    let data=await bookBL.addBook(newbook);
    return resp.json(data);
})

//update book
router.route('/:id').put(async(req,resp)=>{
    let updatebook=req.body;
    let id=req.params.id;
    let data=await bookBL.updateBook(updatebook,id);
    return resp.json(data);
})

//delete book
router.route('/:id').delete(async (req,resp)=>{
    let id=req.params.id;
    let data= await bookBL.deleteBook(id);
    return resp.json(data);
})

module.exports = router