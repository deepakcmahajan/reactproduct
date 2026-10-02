import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import LoginNew from './LoginNew.jsx'
import {BrowserRouter} from 'react-router-dom'
import FetchData from './FetchData.jsx'
createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
<LoginNew />
  </BrowserRouter>

)

