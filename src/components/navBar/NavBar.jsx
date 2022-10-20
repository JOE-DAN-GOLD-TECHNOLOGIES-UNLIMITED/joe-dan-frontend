import React, { useState} from 'react';
import "./NavBar.css";
import { MdCancel} from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu.png";
import email from '../../assets/images/email.png'
import phone from '../../assets/images/phone.png'

export default function NavBar({ currentPage }) {
  const [navbar, setNavbar] = useState(false);
  const [show, setShow] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  };
  window.addEventListener('scroll', changeNav)

  function page(page) {
    if (page === currentPage) return {
      borderBottom: " none"
    };
    return {};
  }

  const shower = () =>{
    setShow(!show);
  }


  return (
    <div className= {show ? 'opacity' : ''}>
      <div className='top-margin'></div>
      <nav className={navbar ? 'nav-bar active' : 'nav-bar'}>

        <div className='contact-details-container'>
          <marquee behavior="100" direction="right">
            <div className='m-phone'>
              <img src={phone} alt="phone" style={{width:'30px', height:'25px'}} />
              <p>+234 09037231624 or  +234 8115636432 </p>
            </div> 
          </marquee>

          <marquee behavior="" direction="left">
            <div className='m-email'>
              <img src={email} alt="phone" style={{width:'30px', height:'25px'}}/>
              <p> achilihudaniel53@gmail or Ukagajosephchibuikem@gmail.com</p> 
            </div>
          </marquee>

        </div>
       
        <div className='j-d-navbar'>

          <div className='navigation-bar-content'>
            <div className='navigation-logo'>
              <Link to='/' >
                <img src={logo} alt="phone"/>
              </Link>     
            </div>

            <div className='navigation-items'>
              <Link to='/'>
                <p>Home</p>

              </Link>
              
              <Link to='/ourservices' >
                <p>Services</p>
              </Link>

              <Link to='/contactus'>
                <p>Contact Us</p>
              </Link>
              
              <Link to='/faq'> 
                <p>FAQ</p>
              </Link>

              <Link to='/termsandconditions' >  
                <p>Terms and Conditions</p>
              </Link>

            </div>

          </div>


          <div className='nav-menu'>
            <div className="links-section">
              <img src={menu} alt="menu" className='menu' onClick={shower} />
              <div className={!show ? 'links show' : 'links'}>
                  <p onClick={shower} style = {{cursor: 'pointer'}} className = 'exit'><MdCancel size = {55}/></p> 
                
                  <p>

                  <Link to='/' className='link' style={page("home")} > <p>Home</p></Link> 
                  <Link to='/ourservices' className='link' style={page("home")} > <p>Services</p></Link> 
                  <Link to='/contactus' className='link' style={page("home")} > <p>Contact</p></Link> 
                  <Link to='/faq' className='link' style={page("home")} > <p>FAQ</p></Link> 
                  <Link to='/termsandconditions' className='link' style={page("home")} > <p>Terms and Conditions</p></Link> 
                  </p>
                
              </div>
            </div>
          </div>
            

        </div>
      </nav>
    </div>
  )
}
