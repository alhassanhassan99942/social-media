import { act, useContext } from "react";
import { createContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

    const setAuth = authUser => {
        setUser(authUser)
    }

    const setUserData = userData => {
        setUser(...userData)
    }

    return (
        <AuthContext.Provider value={{user, setAuth, setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)