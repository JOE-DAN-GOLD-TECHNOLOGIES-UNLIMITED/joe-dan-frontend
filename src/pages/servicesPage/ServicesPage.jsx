import React from 'react'
import './ServicesPage.css'
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import  services from './services.json'
import CustomButton from '../../components/custombutton/CustomButton';



function ServicesPage() {
  return (
      
    <div className='services-page'>

      <div>
        <NavBar/> 
      </div>
      
      <div className='services-page-header'>
        <h2>Our Services</h2>
      </div>

      <div className='services-details'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolore repudiandae dolorum animi eaque aut iure quo voluptates magni amet officiis, laboriosam quaerat consequuntur dolorem pariatur placeat, temporibus, aliquam tempore.</p>
      </div>

      <div className='our-services'>
        {
          services.map((service, index) => (
            <React.Fragment key={index}>
              <div className='services-box'>
                <div className='services-icon'>
                  <img src={service.img} alt={service.pic} />
                </div>
                <h2 className='services-name'>{service.name}</h2>
                <p className="services-detail">{service.details}</p>
          
                <CustomButton content="Learn More" />
                
              </div>
          
            </React.Fragment>
          ))
        }
      </div>

      <div className='footer'>
        <Footer/>
      </div>

    </div>
  )
}

export default ServicesPage