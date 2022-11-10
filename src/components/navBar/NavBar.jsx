import React, { useState} from 'react';
import "./NavBar.css";
import { MdCancel} from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu.png";
import email from '../../assets/images/email.png'
import phone from '../../assets/images/phone.png'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


// To toggle and make navbar show menu

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
      borderBottom: " none",
      
    };
    return {};
  }
  
  const shower = () =>{
    setShow(!show);
  }
  

  // To make the scroll bar return to top of page

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth', 
      });
    }, [pathname]);
  
    return null;
  }
  
  
  return (
    <div className= {show ? 'opacity' : ''}>
      <div className='top-margin'></div>
      <nav className={navbar ? 'nav-bar active' : 'nav-bar'}>

        <div className='contact-details-container'>
            <div className='m-phone'>
              <img src={phone} alt="phone" style={{width:'30px', height:'25px'}} />
              <p>+234 09037231624 </p>
              <p className='opt2'> or +234 8115636432 </p>
            </div>

            <div className='m-email'>
              <img src={email} alt="phone" style={{width:'30px', height:'25px'}}/>
              <p>joedangoldtech@gmail.com </p> 
            </div>


        </div>
       
        <div className='j-d-navbar'>

          <div className='navigation-bar-content'>
            <div className='navigation-logo'>
              <Link to='/' >
                <img src={logo} alt="phone"/>
              </Link>     
            </div>

            <div className='navigation-items'>
              <Link to='/' onClick={ScrollToTop()} pathname='/'>
                <p>Home</p>

              </Link>
              
              <Link to='/ourservices' onClick={ScrollToTop()} pathname='/ourservices' >
                <p>Services</p>
              </Link>

              <Link to='/contactus' onClick={ScrollToTop()} pathname='/contactus'>
                <p>Contact Us</p>
              </Link>
              
              <Link to='/faq' onClick={ScrollToTop()} pathname='/faq' > 
                <p>FAQ</p>
              </Link>

              <Link to='/termsandconditions' onClick={ScrollToTop()} pathname='/termsandconditions' >  
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
                  <Link to='/' className='link' style={page("Home")} > <p>Home</p></Link> 
                  <Link to='/ourservices' className='link' style={page("Services")} > <p>Services</p></Link> 
                  <Link to='/contactus' className='link' style={page("Contact")} > <p>Contact Us</p></Link> 
                  <Link to='/faq' className='link' style={page("FAQ")} > <p>FAQ</p></Link> 
                  <Link to='/termsandconditions' className='link' style={page("TermsandConditions")} > <p>Terms and Conditions</p></Link> 
                </p>
                
              </div>
            </div>
          </div>
            

        </div>
      </nav>
    </div>
  )
}
