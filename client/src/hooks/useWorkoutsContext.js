import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from 'react'

// To use workouts data, we must invoke useWorkoutsContext to get the context value
export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)
    if (!context) {
        throw Error("useWorkoutsContext must be used within WorkoutsContextProvider")
    }

    return context
}