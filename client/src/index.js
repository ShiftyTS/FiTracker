import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WorkoutsContextProvider } from './context/WorkoutContext'
import { AuthenticationContextProvider } from './context/AuthenticationContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </AuthenticationContextProvider>
  </React.StrictMode>
);

reportWebVitals();
