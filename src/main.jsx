import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import DesktopCanvas from './components/DesktopCanvas.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DesktopCanvas><App /></DesktopCanvas>
    </BrowserRouter>
  </React.StrictMode>,
)
