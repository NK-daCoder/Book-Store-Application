import React from 'react';
import ShoppingBagItemCard from './ShoppingBagItemCard';
import { getCartItems } from "./MainHeader";
import { getImageUrl } from './BookCard';
import { useDispatch } from 'react-redux';
import { clearFromCart } from '../redux/features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const ShoppingBag = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Use the useNavigate hook here

    const handleClearCart = () => {
        dispatch(clearFromCart());
    };

    const items = getCartItems();

    // Calculating the total price for each item in the cart
    const totalPrice = items.reduce((accumulator, item) => accumulator + item.newPrice, 0).toFixed(2);

    // Handle Checkout
    const handleCheckout = () => {
        if (items.length > 0) {
            navigate('/checkout'); // Use navigate here instead of Navigate
        } else {
            alert("Your shopping bag is empty. Please add items before proceeding to checkout.");
        }
    };

    return (
        <>
            <article className="px-3 py-2">
                <section className="flex justify-between my-4">
                    <h3 className="text-xl text-stone-600 flex items-center gap-2">
                        <span className="material-symbols-rounded p-1 bg-gradient-to-bl from-blue-400 to-blue-600 text-white rounded-md">
                            shopping_bag
                        </span>
                        Shopping Bag
                    </h3>
                    <button
                        type="button"
                        onClick={handleClearCart}
                        className="transition-transform hover:scale-105 active:scale-95 text-red-700 rounded-md px-3 py-2 flex gap-2 items-center justify-center font-semibold"
                    >
                        <span className="material-symbols-rounded text-white p-1 rounded-md bg-gradient-to-bl from-red-600 to-red-800">
                            delete_history
                        </span>
                        Clear Cart
                    </button>
                </section>
                <ul>
                    {
                        items.length > 0 ?
                            items.map((item, index) => (
                                <React.Fragment key={index}>
                                    <li>
                                        <ShoppingBagItemCard
                                            productImage={getImageUrl(item.coverImage)}
                                            productTitle={item.title}
                                            quantity={1}
                                            category={item.category}
                                            currentPrice={item.newPrice}
                                            product={item}
                                        />
                                    </li>
                                    <hr className="my-3" />
                                </React.Fragment>
                            )) :
                            <div>No Items Added</div>
                    }
                </ul>
                <section className="flex justify-between my-4">
                    <h3 className="text-xl">SubTotal</h3>
                    <p className="text-xl">
                        {items.length > 0 ? totalPrice : 0}
                    </p>
                </section>
            
                <button
                    onClick={handleCheckout}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md transition-transform hover:scale-105 active:scale-95"
                >
                    Proceed To Checkout
                </button>
            </article>
        </>
    );
};

export default ShoppingBag;
