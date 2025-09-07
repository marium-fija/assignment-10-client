
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import  { auth } from "../firebase/firebase.init.js"
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const logOut = () => {
        return signOut(auth);
    };
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
             setLoading(false);
        });
    return() => {
        unsubscribe();
    };
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        login,
        googleLogin,
        loading,
        logOut,
        updateUser
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
  };

export default AuthProvider;