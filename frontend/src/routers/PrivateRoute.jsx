import React from 'react'
import { useAuth } from '../context/AuthContext'

import { Navigate } from 'react-router-dom';

// we set this private route to protect the checkout page.
const PrivateRoute = ({children}) => {
    const {currentUser, loading} = useAuth();

    if(loading) {
        return <div>Loading....</div>
    }
    
    if (currentUser) {
        // children are the nested elements that will go within this functional component
        return children;
    }
    return <Navigate to="/login" replace/>
}

export default PrivateRoute