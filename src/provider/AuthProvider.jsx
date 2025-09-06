
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import  { auth } from "../firebase/firebase.init.js"
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
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
        logOut,
        updateUser
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
  };

export default AuthProvider;