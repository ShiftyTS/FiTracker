import { useAuthenticationContext } from "./useAuthenticationContext"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
    const { dispatch } = useAuthenticationContext()
    const { dispatch: workoutsDispatch } = useWorkoutsContext()
    
    // Deletes the token from local storage and updates the global state to logout
    const logout = () => {
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'GET_WORKOUTS', payload: null})
    }
    return {logout}
}