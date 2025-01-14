import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { useFetchAllBooksQuery } from '../redux/features/books/booksApi';


const Books = ({ selectedCategory }) => {
    const [filteredBooks, setFilteredBooks] = useState([]);

    const {data: books = []} = useFetchAllBooksQuery();

    useEffect(() => {
        // Check if books exist to avoid unnecessary updates
        if (books?.length > 0) {
            if (selectedCategory === "All") {
                setFilteredBooks(books);
            } else {
                const filtered = books.filter(
                    (book) => book.category?.toLowerCase() === selectedCategory.toLowerCase()
                );
                setFilteredBooks(filtered);
            }
        }
    }, [books, selectedCategory]);
    

    return (
        <section>
            <ul className="flex flex-wrap justify-center gap-3 py-4">
                {filteredBooks.map((book, index) => (
                    <li key={index} className="w-[23rem]">
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
