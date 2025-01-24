const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const router =  express.Router();

// just ensures the admin is the only one in control
const verifyAdminToken = require("../middleware/verifyAdminToken");

// frontend => backend server => controller => book schema  => database => send to server => back to the frontend

// post = Used to create new data. Like placing a new order in the restaurant
// get =  Used to retrieve data. Comparable to asking about the menu or checking the status of your order.
// put/patch = Used to update existing data. Similar to changing an order you've already placed.
// delete = when deleteing data

// post a book. only admin can do it due to the verifyAdminToken
router.post("/create-book", verifyAdminToken ,postABook)

// get all books
router.get("/", getAllBooks);

// single book endpoint
router.get("/:id", getSingleBook);

// update a book endpoint only admin due to the verifyAdminToken
router.put("/edit/:id", verifyAdminToken, UpdateBook);

// removing book only admin due to the verifyAdminToken
router.delete("/:id", verifyAdminToken, deleteABook)


module.exports = router;