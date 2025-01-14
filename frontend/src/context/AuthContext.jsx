import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

// defining authContext for authintications
const AuthContext = createContext();
// will be used to check if the user is available on the context
export const useAuth = () => {
    return useContext(AuthContext);
}

// Auth provider
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register user
    const registerUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }

    // sign up with google
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
        prompt: 'select_account' // Forces account selection every time
    });

    const signInWithGoogle = async () => {
        return signInWithPopup(auth, provider);
    }

    // logout user
    const logout = () => {
        return signOut(auth);
    }

    // manage user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
            if (user) {
                const {email, userName, photoUrl} = user;
                const userData = {
                    email, username: displayName, photo: photoUrl
                } 
            }
            return () => unsubscribe();
        })
    }, [])

    const value = {
        currentUser,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}