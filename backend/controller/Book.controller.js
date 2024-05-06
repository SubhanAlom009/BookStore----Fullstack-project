import { Book } from "../model/Book.model.js";

const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book)
    } catch (error) {
        console.log("connection to the database failed",error);
        res.status(500).json(error)
    }
}

export {getBook}
