import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import './DetailsPageNav.css'
import mouse from '../images/mouse.jpg'
import det from '../SomeDetails'
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development'


function DetailsPageNav() {
  let { id } = useParams();

  console.log("helloo this is id " + id);

  return (
    <div>
      <Container className='containerdetnav'>
        <Navbar bg="transparent" expand="lg" className="navbar">
        {det.map(product => (
          <div key={product.id} className='cardd-det-nav'>
            <div className='image-nav' style={{backgroundColor: product.logoBackground}}>

            </div>
            {/* <img src={ mouse } className='image-nav'/> */}
            <div className='dev-title'>
              <h4 style={{ fontWeight: 'bolder'}}>Scoot</h4>
              <p className='dev-description'>scoot.com</p>
            </div>
            <button className='dev-button'>Company Site</button>
         
            
            
          </div>)
        )
}
        </Navbar>
      </Container>
    </div>
  )
}

export default DetailsPageNav
