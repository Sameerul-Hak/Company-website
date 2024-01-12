import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navgations() {
  return (
    <div className='navigations_cont'>
      <div className='navigations_parent'>
        <h3><Link to='/' id='link' >Home</Link></h3>
        <h3><Link to='/about' id='link'>About</Link></h3>
        <h3>Members Corner</h3>
        <h3>Informtion hub</h3>
        <h3>Ecosystem</h3>
        <h3>Events</h3>
        <h3>Academia</h3>
        <h3>Startup</h3>
        <h3>Contact us</h3>
      </div>
    </div>
  )
}

export default Navgations
