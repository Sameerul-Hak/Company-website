import React from 'react'
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navgations from './Navgations';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar_container'>
      <div className='main_nav'>
        <div className='icons'>
            <Link><h4 className='top_nav_link'>CONTACT US</h4></Link>
            <Link><h4 className='top_nav_link'>LOGIN</h4></Link>
          
            <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
            <FontAwesomeIcon icon={faTwitter} size="1x" />
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </div>
      </div>
      <div className='nav_2'> 
      <Navgations/>

      </div>
    </div>
  )
}

export default Navbar
