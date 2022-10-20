import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

function Footer() {
  return (
    <div className='footer'>
        <footer className='resize-max'>        
            <div className="main-content">

                <div className="logo box">
                    
                    <div className='content'>
                        <img id='logo' src={logo} alt="logo" />
                    </div>
                </div>

                <div className="quick-links box">
                    <h2>Quick Links</h2>
                    <div className="content">
                        <ul>
                            <Link to='/'>
                                <li>Home</li>
                            </Link>

                            <Link to='/ourservices' >
                                <li>Services</li>
                            </Link>
                            
                            <Link to='/contactus'>
                                <li>Contact us</li>
                            </Link>
                            
                            <Link to='/faq'> 
                                <li>FAQ</li>
                            </Link>
                            
                            <Link to='/termsandconditions' >  
                                <li>Terms and Condition</li>
                            </Link>

                        </ul>
                    </div>
                </div>

                <div className="our-product box">
                    <h2>Our Services</h2>
                    <div className="content">
                        <ul>
                            <Link to ='/ourservices'>
                                <li>Environmental waste management.</li>                         
                            </Link>

                            <Link to ='/ourservices'>
                                <li>E-ticketing agent for entertainment and sports. </li>
                            </Link>

                            <Link to ='/ourservices'>
                                <li>Health Status check. </li>
                            </Link>
    
                            <Link to ='/ourservices'>
                                <li>Enginering services.</li>
                            </Link>
        
                            <Link to ='/ourservices'>
                                <li>Website development & Software Engineering.</li>
                            </Link>
            
                            <Link to ='/ourservices'>
                                <li>Online farm marketing.</li>
                            </Link>

                        </ul>          
                    </div>
                </div>

                <div className="contact-us box">
                    <h2>Contact Us</h2>
                    <div className="content">                  
                        <ul>
                            <li>
                                <h3>Phone :</h3>
                                <p>+234 9037231624  or <br /> +234 8115636432</p>
                            </li> 

                            <li>
                                <h3>E-mail: </h3>
                                <p> achilihudaniel53@gmail.com  or  Ukagajosephchibuikem@gmail.com </p>
                            </li>
                            

                            <li>
                                <h3>Address: </h3>
                                <p> Federal Capital Territory ,  Abuja ,  Nigeria </p> 
                            </li>
                        </ul>              
                    </div>
                </div>

            </div>


            <div className="fotter-bottom">
                <center>
                    <div className="footer-left-bottom">
                        <p>Copyright © 2021-2022 JOEDAN GOLD TECHNOLOGIES UNLIMITED. All Rights Reserved.</p>
                    </div>

                    <div className='footer-right-bottom'>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Condition </li>
                            
                        </ul>
                    </div>    
                </center>
            </div>
        </footer>
    </div>
  )
}

export default Footer