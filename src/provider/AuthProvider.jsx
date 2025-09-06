
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import  { auth } from "../firebase/firebase.init.js"
import { createContext, useState } from "react";

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

    const logOut = () => {
        return signOut(auth);
    };
    

    const authData = {
        user,
        setUser,
        createUser,
        login,
        logOut
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
  };

export default AuthProvider;