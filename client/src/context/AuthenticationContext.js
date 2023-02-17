import { createContext, useReducer, useEffect } from 'react'

export const AuthenticationContext = createContext()

// Checks the action type to either login, logout, or do nothing based on the type
export const authenticationReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

export const AuthenticationContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authenticationReducer, {
        user: null
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            dispatch({ type: 'LOGIN', payload:user })
        }
    }, [])

    console.log('state', state)

// Surrounds every other component in program by wrapping app
    return (
        <AuthenticationContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthenticationContext.Provider>
    )
}