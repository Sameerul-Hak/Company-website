import React from 'react';
import './about.css';
import banner from './banner_img.png';
import vision from './Vision_img.png';
import mis_img1 from './top_left_img.png'
import mis_img2 from './top_right_img.png'
import mis_img3 from './bottom_left_img.png'
import mis_img4 from './bottom_right_img.png'
import area1 from './Area1.png';
import area2 from './Area2.png';
import area3 from './Area3.png';
import chair from './chair.png';
import Link from './Linked.png';
import History from './History.png';
import Navbar from '../Navbar/Navbar';

const About = () => {
  return (
    <div className='about_back'>
        <div className='nav_co'>
            <Navbar/>
        </div>
        <div className='about_banner'>
        <img src={banner} className='about_banner_img'/>
        </div>
        {/* About Description Section  */}
        <div className='about_desc'>
            <p className='about_para'>
                The India Electronics and Semiconductor Association ( Bharat Semiconductor) is spearheading India's semiconductor and electronics manufacturing<br/> 
                industry growth by fostering local and global collaborations and partnerships, upskilling, and supporting startups, MSMEs, and academia.
            </p>
            <p className='about_para'>
                Electronics manufacturing has become one of the highest-growth sectors, attracting global markets, and making India an unparalleled<br/> 
                hub for sub-contract manufacturing. The objective of Bharat Semiconductor is to grow the ESDM business segment in India and make India the preferred<br/>
                 destination for electronics & semiconductor design & manufacturing.
            </p>
            <p className='about_para'>
            We at Bharat Semiconductor strive to promote innovative technology solutions that can positively impact the lives of citizens in India and across the world.<br/>
             This can be achieved only with a healthy dialogue between the Central & State Governments and the industry.
            </p>
        </div>

        {/* Vision Section */}
        <div className='about_vision'>
            <div className='vision_cont'>
                <div className='vision_left_cont'>
                    <img src={vision} className='about_vision_img'/>
                </div>
                <div className='vision_right_cont'>
                    <h1 className='vision_head'>Vision</h1>
                    <div className='vision_para'>
                    <p>To be the largest, most trusted premier industry body representing the<br/>
                    semiconductor, electronics system design and manufacturing industry in India</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='about_mission'>
            <div className='mission_cont'>
                <div className='mission_left_cont'>
                    <div className='mission_title_cont'>
                        <h1 className='mission_head'>Mission</h1>
                    </div>
                    <div className='mission_body_cont'>
                        <div className='mission_top_cont'>
                            <div className='mission_top_1'>
                                <div className='top_left_cont'>
                                    <img src={mis_img1} className='mission_img'/>
                                </div>
                                <div className='top_right_cont'>
                                    <p className='top_right_para'>
                                        Establish ourselves as the <br/>primary destination for<br/> electronics and semiconductor<br/> design and manufacturing.
                                    </p>
                                </div>
                                
                            </div>
                            <div className='mission_top_2'>
                                <div className='top_left_cont'>
                                    <img src={mis_img2} className='mission_img'/>
                                </div>
                                <div className='top_right_cont'>
                                    <p className='top_right_para'>
                                        Serve as a reliable partner for<br/> policy development and<br/> incentives related to electronics and <br/>semiconductors, as well as <br/>facilitate investment promotion.
                                    </p>
    
                                </div>
                            </div>
                            
                        </div>
                        <div className='mission_bottom_cont'>
                            <div className='mission_bottom_1'>
                                <div className='bottom_left_cont'>
                                    <img src={mis_img3} className='mission_img' id="borderimg"/>
                                </div>
                                <div className='bottom_right_cont'>
                                    <p className='top_right_para'>
                                        Facilitate collaboration <br/>between industry and <br/>academia to foster future skill<br/> development in electronics<br/> systems design and<br/>manufacturing (ESDM).
                                    </p>
                                </div>

                            </div>
                            <div className='mission_bottom_2'>
                                <div className='bottom_left_cont'>
                                    <img src={mis_img4} className='mission_img'/>
                                </div>
                                <div className='bottom_right_cont'>
                                    <p className='top_right_para'>
                                        Promote the adoption of <br/>technology for business and <br/>societal improvement and <br/>encourage technology-based <br/>social innovation.
                                    </p>

                                </div>

                            </div>

                        </div>
                        
                    </div>
                    
                </div>
                <div className='mission_right_cont'>

                </div>
            </div>
        </div>

        {/* Focus Areas Section  */}
        <div className='about_major_areas'>
            <div className='major_title_cont'> 
            <h1 className='major_head'>Major Areas</h1>

            </div>
            <div className='major_body_cont'>
                <div className='major_card'>
                    <div className='major_part1'>
                        <img src={area1} className='major_img'/>

                    </div>
                    <div className='major_part2'>
                        <h2 className='major_head'>Promote Innovation and Entrepreneurship</h2>

                    </div>
                    <div className='major_part3'>
                        <p className='major_para'>
                            We aim to collaborate with ESDM-related entities at the central and state levels to establish and support Labs and Incubation Centers across India. This initiative will provide fledgling startups with the necessary mentorship, equipment, market, and ecosystem access to enable success in product development and deployment.
                        </p>
                    </div>
                </div>
                <div className='major_card'>
                    <div className='major_part1'>
                    <img src={area2} className='major_img'/>

                    </div>
                    <div className='major_part2'>
                    <h2 className='major_head'>Partnerships – India and International</h2>

                    </div>
                    <div className='major_part3'>
                        <p className='major_para'>
                            Our goal is to collaborate with state governments to facilitate foreign direct investment (FDI) in the ESDM sector and foster its growth through the establishment of Brownfield and Greenfield clusters, Incubation Centers, and Skill development programs. Moreover, we aim to form international partnerships and alliances to enhance the ESDM ecosystem through innovation, knowledge sharing, and investment.
                        </p>

                    </div>
                </div>
                <div className='major_card'>
                    <div className='major_part1'>
                        <img src={area3} className='major_img'/>

                    </div>
                    <div className='major_part2'>
                        <h2 className='major_head'>Ease of Doing Business in India</h2>

                    </div>
                    <div className='major_part3'>
                        <p className='major_para'>
                            We intend to work alongside central and state government agencies such as MEITY and NITI Aayog to devise favorable policies that promote design-led manufacturing in India. Additionally, we aim to create Core Initiative Groups (CIGs) and Task Forces to address sector-specific challenges and ensure a conducive environment for doing business in the country.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* ChairPerson */}
        <div className='about_chair'>
            <div className='chair_cont'>
                <div className='chair_title_cont'>
                    <h1 className='chair_head'>Message from Chairperson</h1>
                </div>
                <div className='chair_card'>
                    <div className='chair_card_left'>
                        <img  src={chair}className='chair_img'/>
                    </div>
                    <div className='chair_card_right'>
                        <div className='chair_msg_cont'>
                            <p className='chair_msg'>“I’m deeply honoured to assume the new role as a Chairman position of Bharat Semiconductor. I would be determined to drive strategic partnerships between industry, academia, and government to unlock the full potential of this sector along with supporting startups and emerging players in the industry, thereby fueling innovation and entrepreneurship and contributing towards realising the 'Make in India' dream in electronics. I look forward to collaborating with industry leaders and stakeholders to create a positive impact and drive innovation in the Indian semiconductor industry.”</p>
                        </div>
                        <div className='chair_social'>
                            <h5 className='chair_name'>Vinay saren <a><img  src={Link}className='linkedin'/></a></h5>
                        <h5 className='chair_post'>Chairman, Bharat Semiconductors</h5>              
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


        {/* Executive Council */}
        <div className='about_ex'>
            <div className='about_ex_card'>
                <div className='about_ex_title_cont'>
                    <h2 className='about_ex_title'>Executive Council</h2>
                    <h2 className='about_ex_title'>Secretariat</h2>
                    <h2 className='about_ex_title'>ChairPerson</h2>
                </div>
                    <hr/>
            <div className='ex_title'>
                <h1 className='ex_head'>Executive Council (EC)</h1>
            </div>
            <div className='ex_body_cont'>
                <p className='ex_desc'>
                    The Bharat Semiconductor Executive Council (EC) is elected by member representatives. It consists of Industry stalwarts who provide the Vision & Direction for Bharat Semiconductor and actively participate in the various activities. Members of the EC are automatically also members of the Bharat Semiconductor Board. The EC elects from amongst itself a Chairperson, Vice Chairperson and a Treasurer who are the Office Bearers.
                </p>
                <div className='view_link'><a className='view_link'>ViewExecutive coucil (ec) {'>'}</a></div>
            </div>
            </div>
        </div>

        {/* History Section  */}

        <div className='about_history'>
            <div className='history_body_cont'>
                <div className='history_title_cont'>
                    <h1 className='history_head'>
                        History
                    </h1>
                </div>
                <div className='history_img_cont'>
                    <img className='history_img' src={History}/>
                </div>
            </div>
        </div>

        {/* Community Section */}

        <div className='about_community'>
            <div className='community_cont'>
                <div className='community_title_cont'>
                    <h1 className='community_head'>Join our Vibrant  Community</h1>
                </div>
                <button className='com_btn'>Register Now</button>

            </div>
        </div>

        {/* Footer Section */}
        <div className='about_footer'>
            
        </div>

    </div>
  )
}

export default About