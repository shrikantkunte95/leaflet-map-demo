import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';            // ✅ marker fix
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
