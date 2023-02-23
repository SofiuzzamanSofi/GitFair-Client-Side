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


    useEffect(() => {
        const urlPremium = `${process.env.REACT_APP_URL}/premiumuserfromdb`;
        if (user?.email) {
            axios.post(urlPremium, { email: user?.email })
                .then(res => {
                    if (res.data.success) {
                        console.log(res.data.success);
                        // console.log("Before premium user:", premiumUser);
                        setPremiumUser(res.data?.data);
                        // console.log("After premium user:", premiumUser);
                    }
                }).catch(e => {
                    console.log(e)
                })
        }
    }, [user]);


    const authInfo = {
        user,
        premiumUser,
        setPremiumUser,
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