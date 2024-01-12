import React from 'react'
import "./welcome.css";
import welcomeimg from "../../Images/welcome.webp"
function Welcome() {
  return (
    <div className='welcome_cont'>
        <div style={{width:"100%",display:"flex",flexDirection:"row"}}>
                <div className='left_welcome'>
                    <h1>WELCOME TO BHARATH SEMICONDUCTOR SOCIETY</h1>
                    <h3>Bharath Semiconductor Society (BSS), established in 2022, is a professional nonprofit society registered in India.BSSintends to be a trusted knowledge partner to implementing Central & State Governments policies & incentives for the Indian ESDM industry and contribute inbringing an alignment in the Academic curriculum to meet the Industry needs nurtured with Innovation and Research.
            BSS aims to enable business expansion and information dissemination on technical developmentsand solutions through itsdeep network with member companies and institutions in India.</h3>
                </div>
            <div className='right_welcome'>
                <img src={welcomeimg} id="image"/>
            </div>
        </div>
      <div className='yearofes'>
        <div><h1 id="year">19+</h1></div>
        <div><h1>Years of Establishment</h1></div>
      </div>
    </div>
  )
}

export default Welcome
