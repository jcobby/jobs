import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import './DetailsPageNav.css'
import mouse from '../images/mouse.jpg'

function DetailsPageNav() {
  return (
    <div>
      <Container className='containerdetnav'>
        <Navbar bg="transparent" expand="lg" className="navbar">
          <div className='cardd-det-nav'>
            <img src={ mouse } className='image-nav'/>
            <div className='dev-title'>
              <h4 style={{ fontWeight: 'bolder'}}>Scoot</h4>
              <p className='dev-description'>scoot.com</p>
            </div>
            <button className='dev-button'>Company Site</button>
         
            
            
          </div>
        </Navbar>
      </Container>
    </div>
  )
}

export default DetailsPageNav
