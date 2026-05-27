import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  // ← /client zaroori hai
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)