import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.png'

function Footer() {
  return (
    <div className='footer'>
        <footer className='resize-max'>        
            <div class="main-content">

                <div class="logo box">
                    
                    <div className='content'>
                        <img id='logo' src={logo} alt="logo" />
                    </div>
                </div>

                <div class="quick-links box">
                    <h2>Quick Links</h2>
                    <div class="content">
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Contact us</li>
                            <li>FAQ</li>
                            <li>Terms and Condition</li>
                        </ul>
                    </div>
                </div>

                <div class="our-product box">
                    <h2>Our Services</h2>
                    <div class="content">
                        <ul>
                            <li>Environmental waste management.</li>
                            <li>E-ticketing agent for entertainment and sports. </li>
                            <li>Health Status check. </li>
                            <li>Enginering services.</li>
                            <li>Website development & Software Engineering.</li>
                            <li>Online farm marketing.</li>
                        </ul>          
                    </div>
                </div>

                <div class="contact-us box">
                    <h2>Contact Us</h2>
                    <div class="content">                  
                        <ul>
                            <li>
                                <h3>Phone :</h3>
                                <p>+234 9037231624 or +234 </p>
                            </li> 

                            <li>
                                <h3>E-mail: </h3>
                                <p> achilihudaniel53@gmail or  </p>
                            </li>
                            

                            <li>
                                <h3>Address: </h3>
                                <p>Abuja, Nigeria </p> 
                            </li>
                        </ul>              
                    </div>
                </div>

            </div>


            <div class="fotter-bottom">
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