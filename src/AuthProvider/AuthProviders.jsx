import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../utils/firebase/firebase.config';





export const AuthContext = createContext(null);


export const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const githubProviderLogin = (githubProvider) => {
        return signInWithPopup(auth, githubProvider);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        return signOut(auth);
    }
    const authInfo = {
        user,
        createUser,
        login,
        providerLogin,
        githubProviderLogin,
        logOut,
        loading,
        updateUserProfile
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('auth state change', currentUser);
            setUser(currentUser);
            // console.log(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;