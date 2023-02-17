import { useLogout } from '../hooks/useLogout'
import { useAuthenticationContext } from '../hooks/useAuthenticationContext'

// Builds the navigation bar which sits at the top of the application
const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthenticationContext()

    // Logs out of the account when the logout button is clicked
    const handleLogOut = () => {
        logout()
    }

    return (
        <nav class="z-20 fixed border-2 bg-white font-sans flex flex-col text-center md:flex-row md:text-left md:justify-between py-4 px-6 shadow md:items-baseline w-full">
        <div class="mb-2 md:mb-0">
            <a href="/" class="max-md:text-4xl block py-2 pl-2 md:ml-20 text-red-700 rounded font-bold text-3xl">FiTracker</a>
        </div>
        {!user && (<div class="max-md:my-[0.3rem]">
                <a href="/login" class="my-2 ml-3 mr-4 text-lg no-underline text-gray-600 hover:text-red-900 ml-2">Login</a>
                <a href="/register" class="md:mr-24 my-2 ml-3 mr-4 text-lg no-underline text-gray-600 hover:text-red-900 ml-2">Register</a>
        </div>)}
            {user && (<div>
                <a href="/" class="md:my-2 md:ml-3  md:mr-4 text-lg no-underline p-0 text-gray-600 hover:text-red-900 ml-2">Home</a>
                <a href="https://shiftyts.github.io/" target="_blank" class="my-2 ml-4 md:mr-4 mr-4 text-lg no-underline text-gray-600 hover:text-red-900 ml-2">Contact</a>
                <button onClick={handleLogOut} class="md:ml-4 md:mr-20 text-red-500 text-lg border border-red-500 py-1 px-2 rounded-md">Log out</button>
            </div>)}
        </nav>
    )
}

export default Navbar