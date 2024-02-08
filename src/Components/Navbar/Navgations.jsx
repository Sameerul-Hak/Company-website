import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo.jpeg'
function Navgations() {
  return (
    <div className='navigations_cont'>
      <div className='nav_left'>
        <img src={logo}  className='logo'/>
      </div>
      <div className='nav_right'>
          <div className='nav_items'>
            <Link to='/about'><h3 className='nav_links'>ABOUT</h3></Link>
            <Link><h3 className='nav_links'>SECTORS</h3></Link>
            <Link><h3 className='nav_links'>OUR LEADERSHIP</h3></Link>
            <Link><h3 className='nav_links'>MEMBERSHIP</h3></Link>
            <Link><h3 className='nav_links'>MEDIA</h3></Link>
          </div>
      </div>
     
    </div>
  )
}

export default Navgations;
