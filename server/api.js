const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const book = require('./model/bookSchema');
const bodyParser=require('body-parser')
const urlEncodedParser=bodyParser.urlencoded({extended:false});
router.get('/books',function(req, res){
    console.log('get called');
    book.find().then(rec=>{
        if(rec)
            res.send(rec);
        else
            res.send([]);
    })
});
router.get('/book-detail/:id',function(req, res){
    console.log('get by id');
    book.findOne({bookId:req.params.id}).then(rec=>{
        if(rec)
            res.send(rec);
        else
            res.send([]);
    })
});

router.post('/book-add',urlEncodedParser,function(req, res){
    console.log('add book');  
    const book1=new book(req.body);
    book1._id=mongoose.Types.ObjectId();    
    console.log('requet.body'+book1);
    book1.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
});

router.put('/book-edit/:id',function(req, res){
    const book1=new book({
        bookId:req.body.bookId,
        bookName:req.body.bookName,
        authorName:req.body.authorName,
        price:req.body.price,
        availability:req.body.availability,
    });
    // book1.findOneAndUpdate({bookId:req.params.id},book1).then(rec=>{
    //     if(rec)
    //         res.status(200).send(rec);
    //     else
    //         res.send([]);
    // })
    book.findByIdAndUpdate({_id:req.body._id},book1).then(rec=>{
            if(rec)
                res.status(200).send(rec);
            else
                res.send([]);
        });
});

router.delete('/book-detail/:id',function(req, res){
    book.findOneAndDelete({bookId:req.params.id}).then(rec=>{
        if(rec)
            res.send(rec);
        else
            res.send([]);
    })
});
module.exports = router;