// have to install react-router-dom using:
// npm install react-router-dom
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Register from "../components/Register";
import Discovery from "../components/Discovery";
import ShoppingBag, { totalCostOfItems } from "../components/ShoppingBag";
import Checkout from "../components/Checkout";

import PrivateRoute from "./PrivateRoute";

import Purchased from "../pages/Purchased";
import { AdminRoute } from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";

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
                    element: <Purchased />,
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
        },
        {
            path: "/admin",
            element: <AdminLogin/>
        },
        {
            path: "/dashboard",
            element: <AdminRoute><AdminDashboard /></AdminRoute>,
            children: [
                {
                    path: "",
                    element: <AdminRoute><div>Dashboard Home</div></AdminRoute>
                },
                {
                    path:"add-new-book",
                    element: <AdminRoute><div>Add new book</div></AdminRoute>
                },
                {
                    path:"edit-book/:id",
                    element: <AdminRoute><div>Edit book</div></AdminRoute>
                },
                {
                    path:"manage-book",
                    element: <AdminRoute><div>Manage Books</div></AdminRoute>
                },

            ]
        }
    ]
)

export default router;