import { AuthenticationContext } from '../context/AuthenticationContext'
import { useContext } from 'react'

// To use authentication data, we must invoke useAuthenticationContext to get the context value
export const useAuthenticationContext = () => {
    const context = useContext(AuthenticationContext)
    if (!context) {
        throw Error("useAuthenticationContext must be used within within scope of AuthenticationContextProvider")
    }

    return context
}