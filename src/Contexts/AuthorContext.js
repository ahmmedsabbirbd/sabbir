import React, { useContext, useEffect, useState } from 'react'; 
import '../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AuthorContext = React.createContext();

export function useAthu() {
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
    async function signup(email, password, username){
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
    function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }
 
    function logout() {
        const auth = getAuth(); 
        return signOut(auth);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
    } 

    return (
        <AuthorContext.Provider  value={value}>
            {!loading && children}
        </AuthorContext.Provider>
    )
}