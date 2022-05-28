import React, { useContext, useEffect, useState } from 'react'; 
import '../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AuthorContext = React.createContext();

export function useAuth() {
    return useContext(AuthorContext);
}

export function AuthProvider({children}) {
    const [ loading, setLoading ] =useState(true);
    const [ currentUser, setCurrentUser ] =useState('h');
    const navigate = useNavigate();

    useEffect(()=> {
        const auth = getAuth();

        onAuthStateChanged(auth, (user)=> {
            setCurrentUser(user);
            setLoading(false);
        });

        // return unsubscribe;
    }, []);

    // signup function
    const signup = async (email, password, username)=> {
        const auth = getAuth();

        await createUserWithEmailAndPassword(auth, email, password);

        //update profile   
        await updateProfile(auth.currentUser, {
            displayName: username
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        })
    }

    // login function
    const login = (email, password)=> {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout function
    const logout = ()=> {
        const auth = getAuth(); 
        return signOut(auth);
    }

    // password reset
    const resetPassword = (email) => {
        const auth = getAuth();
        return sendPasswordResetEmail(auth, email);
    }

    // Verification Email
    const verificationEmail = (user) => { 
        return sendEmailVerification(user)
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        verificationEmail,
    } 

    return (
        <AuthorContext.Provider  value={value}>
            {!loading && children}
        </AuthorContext.Provider>
    )
}