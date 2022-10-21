import React from "react";
import './App.css'
// import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom'
import { Routes, Route, } from 'react-router-dom'
// import { useLayoutEffect } from "react";
import NavBar from '../src/components/navBar/NavBar';
import Footer from '../src/components/footer/Footer';
import HomePage from "./pages/homePage/HomePage";
import ContactPage from './pages/contactPage/ContactPage';
import ServicesPage from './pages/servicesPage/ServicesPage';
import FaqPage from './pages/faqPage/FaqPage';
import TermsPage from "./pages/termsPage/TermsPage";







// const Wrapper = ({children}) => {
//   const location = useLocation();
//   useLayoutEffect(() => {
//     document.documentElement.scrollTo(0, 0);
//   }, [location.pathname]);
//   return children
// } 

function App() {
  return (
    <div className="jdgt">


      {/* <BrowserRouter> */}
        {/* <Wrapper> */}
          {/* <NavBar /> */}
            <Routes >
              <Route exact path='/' element={<HomePage />} />
              <Route exact path='/contactus' element={<ContactPage />} />
              <Route exact path='/termsandconditions' element={<TermsPage />}/>
              <Route exact path='/ourservices' element={<ServicesPage  />}/>
              <Route exact path='/faq' element={<FaqPage />}/>
              <Route exact path="*" element={<h1>404</h1>} />
            </Routes>
          {/* <Footer /> */}
        {/* </Wrapper> */}
      {/* </BrowserRouter> */}

    </div>
  );
}

export default App;
