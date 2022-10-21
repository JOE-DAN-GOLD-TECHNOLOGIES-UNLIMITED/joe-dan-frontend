import React from "react";
import './App.css'
import { Routes, Route, } from 'react-router-dom'
import HomePage from "./pages/homePage/HomePage";
import ContactPage from './pages/contactPage/ContactPage';
import ServicesPage from './pages/servicesPage/ServicesPage';
import FaqPage from './pages/faqPage/FaqPage';
import TermsPage from "./pages/termsPage/TermsPage";





function App() {
  return (
    <div className="jdgt">


      <Routes >
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/contactus' element={<ContactPage />} />
        <Route exact path='/termsandconditions' element={<TermsPage />}/>
        <Route exact path='/ourservices' element={<ServicesPage  />}/>
        <Route exact path='/faq' element={<FaqPage />}/>
        <Route exact path="*" element={<h1>404</h1>} />
      </Routes>
    </div>

  );

}

export default App;
