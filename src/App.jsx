import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import {Home, Careerengin} from './pages/index'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/" element={<Careerengin />} />
        
      </Routes>
       
      </Router>
    </>
  )
}

export default App
