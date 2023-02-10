import React, { createContext, useEffect, useState } from 'react';
import app from '../../FireBase/firebase.config';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()
    const facebookProvider = new FacebookAuthProvider()

    const google = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const gitHub = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }
    const facebook = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
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
    }, [])

    const authInfo = {
        user,
        google,
        gitHub,
        facebook,
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