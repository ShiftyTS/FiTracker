import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()  //create custom workoutcontext provider component


// Checks the action type, returns the appropriately adjusted workouts accordingly
export const WorkoutsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}


export const WorkoutsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WorkoutsReducer, {
        workouts: null
    })

    // Surrounds every other component in program by wrapping app
    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>  
            { children }
        </WorkoutsContext.Provider>
    )
}