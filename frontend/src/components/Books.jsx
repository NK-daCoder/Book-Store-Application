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
            <ul className="grid grid-cols-2 gap-3">
                {filteredBooks.map((book, index) => (
                    <li key={index}>
                        <BookCard
                            bookImage={book.coverImage}
                            bookTitle={book.title}
                            bookDescription={book.description}
                            bookPreviousPrice={book.oldPrice}
                            bookCurrentPrice={book.newPrice}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Books;
