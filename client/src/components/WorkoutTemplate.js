import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useState } from 'react'
import { useAuthenticationContext } from '../hooks/useAuthenticationContext'

const WorkoutTemplate = ({ workout }) => {
const { dispatch } = useWorkoutsContext()
const [isEditing, setIsEditing] = useState(false)
const { user } = useAuthenticationContext()

    // Handles the delete request by removing the workout from the database and locally removing it from the realtime display
    const handleDelete = async () => {

        // Checks if user is logged in
        if (!user) {
            return
        }

        // Fetches the workout based on the specific workout id
        const res = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await res.json()

        // Deletes the workout
        if (res.ok) {
            dispatch({type:'DELETE_WORKOUT', payload: json})
        }
    }

    // WORK IN PROGRESS (UNFINISHED)
    const handleEdit = async () => {
        setIsEditing(true);
    }
    
    return (
        <div class="z-10 workout-info border 
        border-slate-400 h-40 md:w-4/5 lg:w-10/12 w-11/12 md:mx-12 lg:mx-16 mx-8 bg-white 
        rounded-md .space-y-2 flow-root">
            
            
            <div class="float-left">
                <h4 class="text-lg px-4 py-2.5">
                    {workout.title}
                </h4>
                <div class="px-8"><strong>Sets: </strong>{workout.sets}</div>
                <div class="px-8"><strong>Reps: </strong>{workout.reps}</div>
                <div class="px-8"><strong>Load (kg): </strong>{workout.load}</div>
                <div class="px-8">{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</div>
            </div>
            <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 float-right cursor-pointer mr-4 mt-3 hover:bg-gray-300 transition duration-300 rounded-md ease">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247
                2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 
                13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621
                0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
                <svg onClick={handleEdit} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6 float-right cursor-pointer mr-4 mt-3 hover:bg-gray-300 transition duration-300 rounded-md ease">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0
                 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0
                  0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
        </div>
    )
}

export default WorkoutTemplate