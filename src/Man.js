import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import App from './App';
import About from './Components/About/About'


const Man = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </Router>
      
    </div>
  )
}

export default Man
