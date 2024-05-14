import { createContext, useState } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: ()=>{}
});

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const data = {
        isLoggedIn,
        setIsLoggedIn,
    };
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
