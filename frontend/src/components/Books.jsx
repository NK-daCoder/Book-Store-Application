import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';


const Books = ({ selectedCategory }) => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        fetch("data/books.json")
            .then((response) => response.json())
            .then((data) => setBooks(data))
            .catch((error) => console.error("Error fetching books:", error));
    }, []);

    useEffect(() => {
        // Filter books based on selected category
        if (selectedCategory === "All") {
            setFilteredBooks(books);
        } else {
            const filtered = books.filter(
                (book) => book.category.toLowerCase() === selectedCategory.toLowerCase()
            );
            setFilteredBooks(filtered);
        }
        
    }, [books, selectedCategory]);

    return (
        <section>
            <ul className="grid grid-cols-2 gap-3 py-4">
                {filteredBooks.map((book, index) => (
                    <li key={index}>
                        <BookCard
                            bookImage={book.coverImage}
                            bookTitle={book.title}
                            // if the book descriptions length is greater than 80 than slice it to 80 chars otherwise leave as is
                            bookDescription={book.description.length > 50 ? `${book.description.slice(0, 50)}...` : book.description }
                            bookPreviousPrice={book.oldPrice}
                            bookCurrentPrice={book.newPrice}
                            addBookToCart={book}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Books;
