import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/features/cart/cartSlice';

const ShoppingBagItemCard = ({ product, productImage, productTitle, quantity, catagory, currentPrice}) => {
  
  const dispatch = useDispatch();

  const handleDeleteItem = (product) => {
    dispatch(removeFromCart(product));
  }
  
  
  return (
    <section className="flex gap-2 items-center">
        <img src={productImage} alt={productTitle} className="w-[7.5rem]"/>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl text-stone-400">Product Title: <span className="text-stone-700">{productTitle}</span></h3>
          <p className="text-md text-stone-400">Category: <span className="text-stone-700">{catagory}</span></p>
          <p className="text-md text-stone-400">Quantity: <span className="text-stone-700">{quantity}</span></p>
          <p className="text-md text-stone-400">Price: <span className="text-stone-700">{currentPrice}</span></p>
          <button onClick={() => handleDeleteItem(product)} className="transition-transform hover:scale-105 active:scale-95 w-[7rem] text-white rounded-md text-md bg-gradient-to-bl from-red-600 to-red-800 px-3 py-2 flex gap-1 items-center justify-center">
            <span class="material-symbols-rounded">
              delete
            </span>
            Delete
          </button>
        </div>
        
    </section>
  )
}

export default ShoppingBagItemCard 