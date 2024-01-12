import React from 'react'
import "../../App.css";
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome/Welcome';
import Slider from '../Slider/Slider';
function Home() {
  return (
    <div className="App">
    <div className='nav_cont'>
    <Navbar/>
    </div>
    <div className='slider_cont'>
    <Slider/>
    </div>
    <div>
      <Welcome/>
    </div>
  </div>
  )
}

export default Home
