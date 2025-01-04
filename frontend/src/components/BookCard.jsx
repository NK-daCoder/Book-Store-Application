import React from 'react'

const BookCard = ({bookImage, bookTitle, bookDescription, bookPreviousPrice, bookCurrentPrice}) => {
  return (
    <article className="flex gap-3 flex-col md:flex-row border p-3 mt-4">
        <img src={bookImage} alt={bookTitle} />
        <section className="flex flex-col gap-3">
            <h2>{bookTitle}</h2>
            <p>{bookDescription}</p>

            <div className="flex gap-2">
                <p className="">{bookPreviousPrice}</p>
                <p className="">{bookCurrentPrice}</p>
            </div>
            
            <button className="font-semibold flex items-center justify-center gap-1 px-3 py-2 rounded-md bg-gradient-to-bl from-blue-500 to-blue-800 text-white">
                <span className="material-symbols-rounded">
                    shopping_bag
                </span>
                Add To Shopping Bag
            </button>
        </section>
    </article>
  )
}

export default BookCard