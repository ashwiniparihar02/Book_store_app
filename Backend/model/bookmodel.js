// import mongoose from "mongoose";
// const bookSchema=mongoose.Schema({
//     name:String,
//     price:Number,
//     category:String,
//     image:String,
//     title:String
// })

// const book=mongoose.model("book",bookSchema);

// export default book;

import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String
   
});

const book = mongoose.model("book", bookSchema);

export default book;
