import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()


export function AuthProvider({children}) {

    const [isAuthenticated, setIsAuthenticated ] = useState(false)

    useEffect(()=> {

        const token = localStorage.getItem('token')

        if (token) {

            setIsAuthenticated(true)

        } else {
            setIsAuthenticated(false)
        }

    }, [])

    function LoggedIn () {
        setIsAuthenticated(true)
    }

    function LoggedOut () {

        localStorage.removeItem('token')

        setIsAuthenticated(false)

        
    }


    return (
        <AuthContext.Provider
        value={
            {
                isAuthenticated,
                LoggedIn,
                LoggedOut
            }
        }
        >
            {children}
        </AuthContext.Provider>
    )

}