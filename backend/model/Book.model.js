import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:String,
    price:Number,
    name:String,
    category:String,
    Image:String,
})

export const Book = mongoose.model('Book',bookSchema) 