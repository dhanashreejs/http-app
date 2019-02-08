const mongoose = require ('mongoose');

const bookSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    bookId:{type:Number},
    bookName:{type:String},
    authorName:{type:String},
    price:{type:Number},
    availability:{type:String},
})

module.exports = mongoose.model('Book',bookSchema);
