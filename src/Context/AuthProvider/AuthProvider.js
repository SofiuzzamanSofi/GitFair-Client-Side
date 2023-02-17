import React, { createContext, useEffect, useState } from 'react';
import app from '../../FireBase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import axios from 'axios';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [premiumUser, setPremiumUser] = useState(false);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()

    const google = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const gitHub = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }

    const passReset = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, []);


    const url2 = `${process.env.REACT_APP_URL}/premiumuserfromdb`;
    useEffect(() => {
        if (user?.email) {
            axios.post(url2, { email: user?.email })
                .then(res => {
                    if (res.data.success) {
                        setPremiumUser(true);
                        // const $zoho = window.
                    }
                }).catch(e => {
                    console.log(e)
                })
        }
    }, [user, url2]);


    const authInfo = {
        user,
        premiumUser,
        google,
        gitHub,
        signUp,
        updateUser,
        login,
        logout,
        passReset,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;