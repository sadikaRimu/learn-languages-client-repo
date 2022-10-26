import React from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
export const ThemeContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('rimu');
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
    };
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            //setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const logOut = () => {
        return signOut(auth);
    }
    const authInfo = { user, createUser, signIn, logOut }
    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                <AuthContext.Provider value={authInfo}>
                    {children}
                </AuthContext.Provider>
            </div>
        </ThemeContext.Provider>
    );
};

export default AuthProvider;