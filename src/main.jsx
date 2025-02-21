import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { HashRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="522636665990-1uf8303iomcqulreiut3935n7vtuc1v3.apps.googleusercontent.com" >
        <HashRouter>
        <App />
        </HashRouter>
    </GoogleOAuthProvider>
)
