import React,{ createContext,useContext,useEffect,useState} from "react";
import supabase from "./supabase";

const AuthContext = createContext();

export const AuthProvider =({Children}) =>{
    const [user, setUser] =useState(null);

    useEffect(() => {


        let isActive = true;

        const getSession = async () =>{
            try{
              const res  = await supabase.auth.getSession();

              if (!isActive) return;
               if (session && session.user) {
                setUser(session.user) 
              } else{
                setUser(null)
              }
            } catch (error){
                console.warn('Authprovider: getSession failed', error?.message || error);
                if (isActive){
                    setUser(null)
                }
                
            }
        }
        getSession();

        const {data} = supabase.auth.onAuthStateChange((_event, session) =>{
          try{
            if(session && session.user){
                setUser(session.user)
            } else{
            setUser(null)
            }
          } catch (e) {
            console.warn('Auth provider: onAuthStateChange handle error', e);
          }

        })
 
        const subscription = data?.subscription;
        return () => {
            isActive = false;
            try{
                if (subscription && typeof subscription.unsubscribe === 'function') {
                    subscription.unsubscribe();
                    
                }
            } catch (e) {
             console.warn('AuthProvider: failed to unsubscribe from auth listener', e);
            } 
        }

    },[])
    const setAuth = (authUser) => {
        setUser(authUser);
    };

    return(
        <AuthContext.Provider value={{user, setAuth}}>
            {Children}
        </AuthContext.Provider>
    );
};
 
export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

