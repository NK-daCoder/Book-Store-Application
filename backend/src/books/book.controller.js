const Book = require("./book.model");


const postABook = async (req, res) => {
    try {
        const newBook = await Book({...req.body});
        // .save() comes from mongoose that saves data to 
        await newBook.save();
        // then we send a req to the api
        res.status(200).send({message: "Book posted successfully", book: newBook})
    } catch (error) {
        console.error("Error creating book", error);
        res.status(500).send({message: "Failed to create book"})
    }
}

// get all books
const getAllBooks =  async (req, res) => {
    try {
        // .find() comes from mongoose which will search for a book in the database
        // .sort() sorts the books in the database in decending order
        const books = await Book.find().sort({ createdAt: -1});
        res.status(200).send(books)
        
    } catch (error) {
        console.error("Error fetching books", error);
        res.status(500).send({message: "Failed to fetch books"})
    }
}

// geting a single book
const getSingleBook = async (req, res) => {
    try {
        // getting id from /:id
        const {id} = req.params;
        const book =  await Book.findById(id);
        
        // if there is no book
        if(!book){
            res.status(404).send({message: "Book not Found!"})
        }
        res.status(200).send(book)
        
    } catch (error) {
        console.error("Error fetching book", error);
        res.status(500).send({message: "Failed to fetch book"})
    }

}

// update book data
const UpdateBook = async (req, res) => {
    try {
        const {id} = req.params;
        // .findByIdAndUpdate(id, update, {if new data is found return true})
        const updatedBook =  await Book.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedBook) {
            res.status(404).send({message: "Book is not Found!"})
        }
        res.status(200).send({
            message: "Book updated successfully",
            book: updatedBook
        })
    } catch (error) {
        console.error("Error updating a book", error);
        res.status(500).send({message: "Failed to update a book"})
    }
}

// deleted book from database
const deleteABook = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBook =  await Book.findByIdAndDelete(id);
        if(!deletedBook) {
            res.status(404).send({message: "Book is not Found!"})
        }
        res.status(200).send({
            message: "Book deleted successfully",
            book: deletedBook
        })
    } catch (error) {
        console.error("Error deleting a book", error);
        res.status(500).send({message: "Failed to delete a book"})
    }
};

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    UpdateBook,
    deleteABook
}