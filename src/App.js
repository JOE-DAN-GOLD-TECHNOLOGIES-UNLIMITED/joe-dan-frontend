import React from "react";
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/homePage/HomePage";
import ContactPage from './pages/contactPage/ContactPage';
import ServicesPage from './pages/servicesPage/ServicesPage';
import FaqPage from './pages/faqPage/FaqPage';
import TermsPage from "./pages/termsPage/TermsPage";


function App() {
  return (
    <div className="jdgt">
{/* 
        <Routes>
          <Route exact path='/' component={<HomePage />}/>
          <Route exact path='/contactus' component={<ContactPage />}/>
          <Route exact path='/termsandcondition' component={<TermsPage />}/>
          <Route exact path='/ourservices' component={<ServicesPage />}/>
          <Route exact path='/faq' component={<FaqPage />}/>

          <Route exact path="*" element={<h1>404</h1>} />

        </Routes> */}

      <HomePage/>
      <ContactPage/>
      <ServicesPage />
      <FaqPage />
      <TermsPage />

    </div>
  );
}

export default App;
