import React, { useState } from 'react';
import avatar from "../assets/avatar.png";

// to link to your paths from the router folder
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

// getting the cart items from store.js
export const getCartItems = () => {
    const getCartItems = useSelector(state => state.cart.cartItems);
    // console.log(getCartItems);
    return getCartItems
}


const MainHeader = () => {
    const [toggle, setToggle] = useState(false);

    const toggleAccountMenu = () => {
        // makeing toggle state true by using !toggle
        setToggle(!toggle);
    }

    const items = getCartItems();

    return (
        
        <section className="relative flex justify-between items-center p-2 border rounded-2xl ">
            <button onClick={toggleAccountMenu} className={`flex items-center gap-1`}>
                <img src={avatar} alt="avatar" />
                <span className={`material-symbols-rounded transform transition-transform ease-in-out duration-300 ${toggle ? "rotate-180" : "rotate-0"}`}>
                    arrow_drop_down
                </span>
            </button>
            <ul className={`z-10 transition-transform absolute -left-1 top-16 bg-white py-6 grid gap-2 px-4 border rounded-2xl ${toggle ? "scale-1" : "scale-0"}`}>
                <li><Link to="" className="text-gray-400 transition-all hover:text-gray-600">Dashboard</Link></li>
                <li><Link to="/login" className="text-gray-400 transition-all hover:text-gray-600">Login Page</Link></li>
            </ul>
            <div className="flex items-center border w-1/2 rounded-2xl overflow-hidden">
                <input type="search" placeholder="Search Our Collection..." className={`w-full p-2`} />
                <button className="flex items-center w-12 justify-center text-gray-400">
                    <span className="material-symbols-rounded !text-md">
                        search
                    </span>
                </button>
            </div>
            
            <ul className={`flex gap-4`}>
                <li>
                    <button className="flex items-center text-gray-400 border rounded-xl p-2">
                        <span className="material-symbols-rounded !text-md">
                            notifications
                        </span>
                    </button>
                </li>
                <li className="relative">
                    <Link to="/shopping-bag" className="flex gap-2 text-md items-center text-gray-400 border rounded-xl p-2">
                        <span className="material-symbols-rounded !text-md">
                            shopping_cart
                        </span>
                        {/* updateing the html based on the items added in the cart the cart */}
                        {
                            items.length > 0 ?  items.length : "0"
                        }
                    </Link>
                </li>
            </ul>

        </section>
    )
}

export default MainHeader;
