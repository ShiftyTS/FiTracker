import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

// Builds the login page
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    // Attempts to log in on button click
    const handleLogin = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
            <div class="flex items-center justify-center min-h-screen bg-gray-100 rounded-md">
            <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg w-[28rem] h-[20.5rem] rounded-md">
                <h3 class="text-2xl font-bold text-center font-['Poppins']">Login to your account</h3>
                <form onSubmit={handleLogin}>
                    <div class="mt-4">
                        <div>
                            <label class="block font-['Poppins']" for="email">Email</label>
                                    <input 
                                        type="email" 
                                        placeholder="Email"
                                        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                        </div>
                        <div class="mt-4">
                            <label class="block font-['Poppins']">Password</label>
                                    <input 
                                        type="password" 
                                        placeholder="Password"
                                        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                        </div>
                        <div class="flex items-baseline justify-between">
                            <button disabled={isLoading} class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 font-['Poppins']">Login</button>
                            {error && <div class="error font-['Poppins'] bg-red-100 border border-red-500 w-[17rem] px-2 py-1 mt-3 rounded-md">
                                Error: Invalid Login</div>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login