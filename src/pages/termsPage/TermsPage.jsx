import React from 'react'
import './TermsPage.css'
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import terms from './terms.json'

function TermsPage() {
  return (
    <div className='terms-page'>

      <div>
        <NavBar/> 
      </div>
      
      <div className='terms-header'>
        <h2>Terms and Conditions</h2>
      </div>
      
      <div className='terms'>
        {
          terms.map((term, index) => (
            <React.Fragment key={index}>
              <div className='term-box'>
                <p className='terms-name'>{term.terms}</p>   
              </div>
          
            </React.Fragment>
          ))
        }
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default TermsPage