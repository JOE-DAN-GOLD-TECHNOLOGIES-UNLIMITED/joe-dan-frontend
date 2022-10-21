import React from 'react'
import './HomePage.css'
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import CustomButton from '../../components/custombutton/CustomButton';
import target from "../../assets/images/target.png";
import eye from "../../assets/images/eye.png";
import logo from "../../assets/images/logo.png";
import homeP from "../../assets/images/homeP.png";
import Daniel from "../../assets/images/Daniel.JPG";
import Joseph from "../../assets/images/Joseph.JPG";
import founders from './founders.json'


function HomePage() {
  return (   
    <div className="home-page">
     
      <div>
        <NavBar/> 
      </div>
    
      <div className="home-info">
        <div className='home-details'>
          <h1>We Encourage Innovation by Rendering  <br /><span> Technological Services </span> </h1> 

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam doloribus magni minima ab inventore repellat at blanditiis. Tempore nesciunt iusto eius ex, delectus corporis ipsa possimus accusamus sed laudantium? </p>

          <div className ="home-btn">
            <CustomButton content="Learn More" />
            <CustomButton content="Contact Us" />
          </div>

        </div>

        <div className="home-pic"> 
          <img src={homeP} alt="" />
        </div> 
        
      </div>
    

      <div className='about-us-header'>
        <h2>Our Mission & Vision</h2>
      </div>

      <div className='about-us-page'>
        
        <div className='mission-vision'>

          <div className='our-mission'>
            <img src={target} alt="" />
            <p>Our Mission</p>
          </div>

          <div className='world-of-JDG'>
            <img src={logo} alt="" />
            <p>World of JDG</p>
          </div>

          <div className='our-vision'>
            <img src={eye} alt="" />
            <p>Our Vision</p>
          </div>

        </div>

        <div className='mission'>
          <h1> Our Mission</h1>
          <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus nisi dignissimos corporis. Repellat eius dolores enim ad in natus? Voluptatibus quidem recusandae minus nulla illo architecto consequatur cupiditate consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus nisi dignissimos corporis. Repellat eius dolores enim ad in natus? Voluptatibus quidem recusandae minus nulla illo architecto consequatur cupiditate consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus nisi dignissimos corporis. Repellat eius dolores enim ad in natus? Voluptatibus quidem recusandae minus nulla illo architecto consequatur cupiditate consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus nisi dignissimos corporis. Repellat eius dolores enim ad in natus? Voluptatibus quidem recusandae minus nulla illo architecto consequatur cupiditate consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus nisi dignissimos corporis. Repellat eius dolores enim ad in natus? Voluptatibus quidem recusandae minus nulla illo architecto consequatur cupiditate consectetur.</li>
          </ol>
        </div>

        <div className='our-awesome-team'>
          <div className='our-awesome-team-header'>
            <h1>Our Awesome Team</h1>
          </div>

          <p> 
          Presenting the minds behind JOE-DAN Gold Technology Unlimited. A unified team of experts who are passionately driven by the concept of smart solutions, bringing new technological ideas for the world at large. they ensure that comfort and satisfaction go hand-in-hand </p>
        </div>

        <div className='founder'>
          <div className='founder-details-box'>
            <div className='founder-image'>
              <img src={Joseph} alt="" />
            </div>

            <h3>UKAGA JOSEPH C.</h3>
            <p>CE0 / FOUNDER</p>
          </div>

          <div className='founder-details-box'>
            <div className='founder-image'>
              <img src={Daniel} alt="" />
            </div>
            <h3>ACHILIHU DANIEL U.</h3>
            <p>CTO / CO-FOUNDER</p>
          </div>

        
          <div className='founder-voice'>
            <h1>Founders Voice</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea minus itaque nostrum obcaecati vero in numquam quaerat tempore, rerum voluptates doloribus quasi molestias! Consequuntur illo quidem eos velit, quisquam ea.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eos, earum temporibus dignissimos tempora qui suscipit praesentium hic debitis iure ducimus. Exercitationem, dicta non quos nihil laborum nulla quo nemo.
            </p>
          </div>

        </div>

        <div className='team-details-container'>
          {
            founders.map((founder, index) => (
              <React.Fragment key={index}>
                <div className='team-details-box'>
                  <div className='team-details-image'>
                    <img src={Daniel} alt={founder.name} />
                  </div>
                  <h3 className='team-name'>{founder.name}</h3>
                  <p className="team-position">{founder.position}</p>
            
                  <CustomButton content="View Details" />
                  
                </div>
            
              </React.Fragment>
            ))
          }
        </div>

      </div>

      <div className='footer'>
        <Footer/>
      </div>

    </div>

  )
}

export default HomePage