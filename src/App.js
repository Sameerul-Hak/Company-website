import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import About from './Components/About/About'
import Home from './Components/Home/Home';
function App() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
</Router>
  );
}

export default App;
