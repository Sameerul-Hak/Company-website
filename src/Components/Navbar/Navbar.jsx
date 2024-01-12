import React from 'react'
import "./navbar.css";
import logo from "../../Images/logo.png"
import pintrest from "../../Images/pintrest.png"
import instagram from "../../Images/instagram.png"
import linkedin from "../../Images/linkedin.png"
import facebook from "../../Images/facebook.png"
import twitter from "../../Images/twitter.png"
import Navgations from './Navgations';
function Navbar() {
  return (
    <div className='navbar_container'>
      <div className='main_nav'>
        <img src={logo} className='logo'/>
        <div className='icons'>
            <div className='icons_parent'>
                <img src={facebook} className='seperate_icons'/>
                <h4>Facebook</h4>
            </div>
            <div className='icons_parent'>
                <img src={linkedin} className='seperate_icons'/>
                <h4>LinkedIn</h4>
            </div>
            <div className='icons_parent'>
                <img src={instagram} className='seperate_icons'/>
                <h4>Instagram</h4>
            </div>
            <div className='icons_parent'>
                <img src={twitter} className='seperate_icons'/>
                <h4>Twitter</h4>
            </div>
            <div className='icons_parent'>
                <img src={pintrest} className='seperate_icons'/>
                <h4>Pintrest</h4>
            </div>
        </div>
      </div>
      <div>
      <Navgations/>

      </div>
    </div>
  )
}

export default Navbar
