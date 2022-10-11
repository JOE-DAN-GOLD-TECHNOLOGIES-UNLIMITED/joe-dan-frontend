import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ContactPage from './pages/contactPage/ContactPage';
import ServicesPage from './pages/servicesPage/ServicesPage';
import FaqPage from './pages/faqPage/FaqPage';
import TermsPage from "./pages/termsPage/TermsPage";


function App() {
  return (
    <>
        <section style={{ width: "100%" }}>
            <Routes>

                <Route exact path='/' element={<HomePage />}/>
                <Route exact path='/contact' element={<ContactPage />}/>
                <Route exact path='/services' element={<ServicesPage />}/>
                <Route exact path='/faq' element={<FaqPage />}/>
                <Route exact path='/terms-and-condition' element={<TermsPage />}/>
                <Route exact path='/faq' element={<FaqPage />}/>

                <Route exact path="*" element={<h1>404</h1>} />
            </Routes>
        </section>
    </>
  );
}

export default App;
