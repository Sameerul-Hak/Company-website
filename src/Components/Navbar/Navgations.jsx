import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.jpeg';

function Navgations() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='navigations_cont'>
      <div className='nav_left'>
        <img src={logo} className='logo' alt='Logo' />
      </div>
      <div className='nav_right'>
        <ul className='nav_items'>
          <li><Link to='/about' className='nav_links'>MISSION PILLARS</Link></li>
          <li><Link className='nav_links'>LEADERSHIP TEAM</Link></li>
          <li className='nav_dropdown'>
            <button className='nav_dropbtn' onClick={toggleDropdown}><span className='nav_links'>MEMBERSHIP</span></button>
            <div className={isDropdownOpen ? 'nav_dropdown_content show' : 'nav_dropdown_content'}>
              <Link className='nav_links'>ANCHOR MEMBERS</Link>
            </div>
          </li>
          <li className='nav_dropdown'>
            <button className='nav_dropbtn' onClick={toggleDropdown}><span className='nav_links'>RESOURCES</span></button>
            <div className={isDropdownOpen ? 'nav_dropdown_content show' : 'nav_dropdown_content'}>
              <div className='nav_dropdown'>
                <button className='nav_dropbtn'><span className='nav_links'>POLICIES</span></button>
                <div className='nav_dropdown_content'>
                  <Link className='nav_links'>CENTRAL GOVT</Link>
                  <Link className='nav_links'>STATE GOVT</Link>
                </div>
              </div>
              <Link className='nav_links'>INDUSTRY REPORT</Link>
            </div>
          </li>
          <li><Link className='nav_links'>BLOGS</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navgations;
