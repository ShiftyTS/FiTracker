import { useState } from 'react'
import { useAuthenticationContext } from "./useAuthenticationContext"

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthenticationContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()

        // Checks if the response is ok, if yes saves the user to local storage
        // and updates authentication context, otherwise, sets error
        if (!response.ok) {
            setError(json.error)
            setIsLoading(false)
        } else {
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }
    return { login, isLoading, error }
}