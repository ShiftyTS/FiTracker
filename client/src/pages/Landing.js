import { useEffect, useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthenticationContext } from '../hooks/useAuthenticationContext'

// Components
import WorkoutTemplate from '../components/WorkoutTemplate'
import Form from '../components/Form'

// Builds the landing page which displays the navigation bar, workout form, and 
const Landing = () => {
    const {workouts, dispatch} = useWorkoutsContext()
    const {user} = useAuthenticationContext()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })  // For production, make sure every request points to the correct endpoints

            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'GET_WORKOUTS', payload: json})
            }
        }

        // If the user is not logged in, do not try fetching data in the first place
        if (user) {
            fetchData()
        }
    }, [dispatch, user])

    return (
        <div class="landing flex">
            <div class="absolute mt-36 ml-8 w-[43rem] z-0 md:hidden">
                <Form />
            </div>
            <div class="workouts max-md:pt-[36rem] w-[60rem] pt-32 pb-4 md:pt-24 md:pb-3">
                {workouts && workouts.map((workout) => (
                    <div class="py-3 md:pt-5">
                    <WorkoutTemplate key={workout._id} workout={workout} />
                    </div>
                ))}
            </div>
            <div class="relative mt-24 pt-5 mr-8 w-[32rem] max-md:hidden">
                <Form />
            </div>
        </div>
    )
}

export default Landing