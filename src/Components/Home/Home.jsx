import React, { useState, useEffect } from 'react';
import "../../App.css";
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import Welcome from '../Welcome/Welcome';
import Slider from '../Slider/Slider';
import './home.css';
import { Link } from 'react-router-dom';
import aboutImg from '../../Images/industries.png'
import CardSlider from '../MemberCard/CardSlider';

function Home() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = ['Search Blogs', 'Search News'];

  const newsContent = [
    {
      title: 'Know more about the Chemicals: New India\'s Growth Catalyst',
      timestamp: 'today',
    },
    {
      title: 'News Title 2',
      timestamp: 'today',
    },
    {
      title: 'News Title 3',
      timestamp: 'today',
    },
    {
      title: 'News Title 4',
      timestamp: 'today',
    },
    // Add more news items as needed
    {
      title: 'News Title 4',
      timestamp: 'today',
    },
    // Add more news items as needed
    {
      title: 'News Title 4',
      timestamp: 'today',
    },
    // Add more news items as needed
    {
      title: 'News Title 4',
      timestamp: 'today',
    },
    // Add more news items as needed
    {
      title: 'News Title 4',
      timestamp: 'today',
    },
    // Add more news items as needed
    {
      title: 'News Title 4',
      timestamp: 'today',
    },
    // Add more news items as needed
    {
      title: 'News Title 4',
      timestamp: 'today',
    },
    // Add more news items as needed
    {
      title: 'News Title 4',
      timestamp: 'today',
    },
    // Add more news items as needed
  ];

  const blogsContent = [
    {
      title: 'Discover the Latest Technological Innovations',
      timestamp: 'yesterday',
    },
    // Add more blog items as needed
  ];

  const servicesContent = [
    {
      title: 'Explore Our Range of Services',
      timestamp: '2 days ago',
    },
    // Add more service items as needed
  ];

  const [activeButton, setActiveButton] = useState('News'); // Default active button
  const buttonContentMap = {
    News: newsContent,
    Blogs: blogsContent,
    Services: servicesContent,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="home_bg">
      <div className='home_nav_cont'>
        <Navbar/>
      </div>
      <div className='slider_cont'>
        <Slider/>
      </div>
      <div className='home_welcome_cont'>
        <div className='home_main_cont'>
          <div className='home_left'>
            <h1 className='welcome_head'>WELCOME TO BHARAT SEMICONDUCTOR SOCIETY</h1>
            <p className='welcome_para'>
              Bharath Semiconductor Society (BSS), established in 2022, is a professional nonprofit society registered in India. BSS intends to be a trusted knowledge partner to implementing Central & State Governments policies & incentives for the Indian ESDM industry and contribute to bringing an alignment in the Academic curriculum to meet the Industry needs nurtured with Innovation and Research. BSS aims to enable business expansion and information dissemination on technical developments and solutions through its deep network with member companies and institutions in India.
            </p>
          </div>
          <div className='home_right'>
            <div className='home_right_main'>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder={placeholders[placeholderIndex]}
                  className="search-input"
                />
                <div className="search-icon">
                  <FontAwesomeIcon icon={faSearch} color='white' />
                </div>
              </div>
              <div className='home_right_para_cont'>
                <div className='home_right_top'>
                  {Object.keys(buttonContentMap).map((buttonName) => (
                    <button
                      key={buttonName}
                      className={`home_filter ${activeButton === buttonName ? 'active' : ''}`}
                      onClick={() => handleButtonClick(buttonName)}
                    >
                      {buttonName}
                    </button>
                  ))}
                </div>
                <div className='home_right_down'>
                  <div className='home_right_content'>
                    {buttonContentMap[activeButton].map((item, index) => (
                      <div key={index}>
                        <h1 className='content_head'>{item.title}</h1>
                        <p className='time_stamp'>{item.timestamp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='home_about_cont'>
        <div className='home_about_main'>
          <div className='home_about_left'>
            <h1 className='home_about_head'>About BHARAT SEMINCONDUCTORS</h1>
            <p className='home_about_p'>
              Internet and Mobile Association of India (IAMAI) is a not-for-profit industry body registered under the Societies Registration Act, 1860. Its mandate is to expand and enhance the online and mobile value-added services sectors. It is dedicated to presenting a unified voice of the businesses it represents to the government, investors, consumers and other stakeholders.
            </p>
            <Link to='/about'><h4 className='about_link'>Read More</h4></Link>
          </div>
          <div className='home_about_right'>
            <img src={aboutImg } className='home_about_img'/>
          </div>
        </div>
        



      </div>
        <div className='home_members_cont'>
          <div className='home_members_main'>
            <h1 className='members_head'>Our Members</h1>
            <CardSlider/>
          </div>
            
        </div>



    </div>
  );
}

export default Home;
