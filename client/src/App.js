import { BrowserRoute, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useAuthenticationContext } from "./hooks/useAuthenticationContext";

// Pages and components
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'

function App() {
  const { user } = useAuthenticationContext()

  return (
    <div class="App bg-neutral-200">
      <BrowserRouter>
      <Navbar />
        <div class="pages">
          <Routes>
            <Route 
            path="/"
            element={user ? <Landing /> : <Navigate to="/login"/>}
            />
            <Route 
            path="/login"
            element={!user ? <Login /> : <Navigate to="/"/>}
            />
            <Route 
            path="/register"
            element={!user ? <Register /> : <Navigate to="/"/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <div class="bg-neutral-200 fixed h-full w-full z-0 flex">

      </div>
    </div>
  );
}

export default App;
