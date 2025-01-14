// have to install react-router-dom using:
// npm install react-router-dom
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Register from "../components/Register";
import Discovery from "../components/Discovery";
import ShoppingBag, { totalCostOfItems } from "../components/ShoppingBag";
import Checkout from "../components/CheckOut";
import { getCartItems } from "../components/MainHeader";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter(
    [
        {
            // main root path that loads by default
            path: "/",
            element: <App />, // rendering the main app components

            // are the different rout to different pages
            // path: can either be "/" or "/aNameForPage" eg: "/home"
            // element: is any html elements/components that your want to render with corresponding routes
            children: [
                {
                    path: "/",
                    element: <Discovery />,
                },
                {
                    path: "/bookmarks",
                    element: <h1>Bookmarks</h1>,
                },
                {
                    path: "/download",
                    element: <div>Downloads</div>,
                },
                {
                    path: "/purchased",
                    element: <h1>All items bought Page</h1>,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/register",
                    element: <Register />,
                },
                {
                    path: "/shopping-bag",
                    element: <ShoppingBag />,
                },
                {
                    path: "/checkout",
                    // to protect the checkout from all users who are not signed in they will be 
                    // prompted to login/sign-in if they haven't done so already 
                    element: <PrivateRoute><Checkout /></PrivateRoute>,
                }
                
            ]
        }
    ]
)

export default router;