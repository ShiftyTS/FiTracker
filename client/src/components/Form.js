import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthenticationContext } from '../hooks/useAuthenticationContext'

// Builds form to add new workouts to the application
const Form = () => {
    const { dispatch } = useWorkoutsContext()
    const {user} = useAuthenticationContext()
    
    const [title, setTitle] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [load, setLoad] = useState('')
    const [error, setError] = useState(null)
    const [emptyEntries, setEmptyEntries] = useState([])
    
    // Called on submit button click
    const submitForm = async (e) => {
        //stops page from reloading
        e.preventDefault()

        // Checks if user is logged in
        if (!user) {
            setError('You must log in first')
            return
        }

        const workout = {title, sets, reps, load}

        // Fetches data from form
        const res = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout), //passes object as JSON string
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await res.json()

        if (!res.ok) {
            setError(json.error)
            setEmptyEntries(json.emptyEntries)
        } else {
            setTitle('')
            setSets('')
            setReps('')
            setLoad('')
            setError(null)
            setEmptyEntries([])
            if (!title) {
        emptyEntries.push('title')
    }
            //locally adds new workout
            console.log('New workout added', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return (
        <div class="z-10 flow-root flex-initial relative max-md:w-48 w-48 h-64">
        <form class="create-form" onSubmit={submitForm}>
            <h3 class="max-md:mt-4 font-bold text-2xl whitespace-nowrap pb-4 font-['Poppins'] text-red-700">Add a new workout</h3>
            <div>
            <label class="max-md:text-xl text-l font-['Poppins']">Exercise:</label>
            <div>
            <input 
                class="px-2 py-1 max-md:w-[26.5rem] w-64 rounded mt-0.5 mb-4"
                maxlength="25"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            </div>
            <label class="max-md:text-xl max-md:pt-52 text-l font-['Poppins']">Sets:</label>
            <input
                class="px-2 py-1 max-md:w-[26.5rem] w-64 rounded mt-0.5 mb-4"
                type="number"
                onChange={(e) => setSets(e.target.value)}
                value={sets}
            />
            </div>

            <div>
            <label class="text-l font-['Poppins']">Reps:</label>
            <input
                class="px-2 py-1 max-md:w-[26.5rem] w-64 rounded mt-0.5 mb-4"
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />
            <label class="text-l font-['Poppins']">Load (in kg):</label>
            <input
                class="px-2 py-1 max-md:w-[26.5rem] w-64 rounded mt-0.5 mb-4"
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />
            </div>

            <button class="relative px-10 py-3 md:mt-3 font-medium text-white transition duration-300 bg-black rounded-md hover:bg-green-600 ease">
                <span class="absolute bottom-0 left-0 h-full -ml-2">
                <svg viewBox="0 0 487 487" class="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
                </span>
                <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg viewBox="0 0 487 487" class="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
                </span>
                <span class="relative">Submit</span></button>
            {error && <div class="error max-md:mt-[-3.1rem] max-md:ml-[9rem] max-md:h-[3rem] max-md:w-[17.5rem] max-md:py-0 font-['Poppins'] bg-red-100 border border-red-500 lg:w-[21.5rem] w-[16rem] px-2 py-1 mt-3">Error: Please fill in all boxes</div>}
        </form>
        </div>
    )
}

export default Form