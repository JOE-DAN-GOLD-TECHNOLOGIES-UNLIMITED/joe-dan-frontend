import React, { useState} from 'react';
import "./NavBar.css";
// import { MdLocalPhone, MdOutlineMailOutline, MdCancel} from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu.png";

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
        <div className='top'>
          <div className="btop">
            <div className='contact-details-container'>
              <p className='phone'>
                {/* <MdLocalPhone size={30} color="rgba(203, 182, 182)" className="icon" /> */}
                +234 09037231624
                +234 
              </p>
              <p className='email'>
                {/* <MdOutlineMailOutline size={30} color="rgba(203, 182, 182)" className="icon" /> */}
                achilihudaniel53@gmail

              </p>
            </div>
         
          </div>
        </div>

        <div className='bottom btop'>
          <div className='logo-container'>
            <Link to='/'>
              <img src={logo} alt="logo" className='logo' />
            </Link>
          </div>

          {/* <div className='menu-div'> */}
          {/* </div> */}
          <div className="links-section">
            <img src={menu} alt="menu" className='menu' onClick={shower} />
            <div className={show ? 'links show' : 'links'}>
              {/* <p onClick={shower} style = {{cursor: 'pointer'}} className = 'exit'><MdCancel size = {35}/></p> */}
              <Link to='/' className='link home-link' style={page("home")} >Home</Link>
              
              <p className='link' About Us style={page("about")}></p>
              <Link to="/services" className='link' style={page("services")}>Product</Link>
              <Link to="/contact" className='link' style={page("contact")}>Contact Us</Link>

              <p className='link' style={page("faq")}>FAQ</p>
              <Link to='/term-and-condition' className='terms-and-condition'>Terms and Condition</Link>
             
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}
