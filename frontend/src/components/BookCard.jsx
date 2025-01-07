import React from 'react';
import { Link } from 'react-router-dom';
import { buttonNav } from "./Header";
import { useDispatch } from "react-redux";
import {addToCart} from "../redux/features/cart/cartSlice";

export const getImageUrl = (imageName) => {
    return new URL(`../assets/books/${imageName}`, import.meta.url);
}

const BookCard = ({bookImage, bookTitle, bookDescription, bookPreviousPrice, bookCurrentPrice, addBookToCart}) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
  
    return (
    <article className="rounded-2xl flex gap-3 flex-col md:flex-row border p-3 mt-4 transition-transform hover:shadow-md h-[20rem]">
        <img src={getImageUrl(bookImage)} alt={bookTitle} className="w-[10rem]"/>
        <section className="flex flex-col gap-3 pt-10 h-full relative">
            <h2 className="text-xl font-semibold">{bookTitle}</h2>
            <p className="text-sm">{bookDescription}</p>

            <div className="flex gap-2">
                <p className="line-through">{bookPreviousPrice}</p>
                <p className="">{bookCurrentPrice}</p>
            </div>
            
            <ul className="flex gap-2">
                <li>
                    <button onClick={() => handleAddToCart(addBookToCart)} className="absolute bottom-0 text-sm transition-transform hover:scale-105 active:scale-95 shadow-md font-semibold flex items-center justify-center gap-1 p-2 rounded-md bg-gradient-to-bl from-blue-500 to-blue-800 text-white">
                        <span className="material-symbols-rounded pb-1">
                            shopping_bag
                        </span>
                        Add To Bag
                    </button>
                </li>
            </ul>

            <ul className="flex justify-between w-full items-center absolute top-0">
                <li>
                    <button className="text-gray-400 p-1 rounded-md flex items-center justify-center transform hover:scale-105 active:scale-95 transition-transform">
                        <span className="material-symbols-rounded">{buttonNav[2].buttonIcon}</span>
                    </button>
                </li>
                <li>
                    <button className="text-gray-400 p-1 rounded-md flex items-center justify-center transform hover:scale-105 active:scale-95 transition-transform">
                        <span className="material-symbols-rounded">{buttonNav[1].buttonIcon}</span>
                    </button>
                </li>
            </ul>
            
        </section>
    </article>
  )
}

export default BookCard