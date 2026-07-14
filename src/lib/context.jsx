import React, { createContext, useContext, useEffect, useState } from "react";
import supabase from "./supabase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let isActive = true;

        const getSession = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                const session = data?.session;

                if (!isActive) return;

                if (error) {
                    console.warn('AuthProvider: getSession failed', error?.message || error);
                    setUser(null);
                    return;
                }

                if (session && session.user) {
                    setUser(session.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.warn('AuthProvider: getSession failed', error?.message || error);
                if (isActive) {
                    setUser(null);
                }
            }
        };

        getSession();

        const { data } = supabase.auth.onAuthStateChange((_event, session) => {
            try {
                if (session && session.user) {
                    setUser(session.user);
                } else {
                    setUser(null);
                }
            } catch (e) {
                console.warn('AuthProvider: onAuthStateChange handle error', e);
            }
        });

        const subscription = data?.subscription;

        return () => {
            isActive = false;
            try {
                if (subscription && typeof subscription.unsubscribe === 'function') {
                    subscription.unsubscribe();
                }
            } catch (e) {
                console.warn('AuthProvider: failed to unsubscribe from auth listener', e);
            }
        };
    }, []);

    const setAuth = (authUser) => {
        setUser(authUser);
    };

    return (
        <AuthContext.Provider value={{ user, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
 
export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

