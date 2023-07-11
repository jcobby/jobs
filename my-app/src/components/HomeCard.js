import React from 'react'
import { Navbar, Container, FormControl, Form, Button, Row, Col, Image } from 'react-bootstrap';
import shopping_bag from '../images/shopping_bag.png'
import det from '../SomeDetails'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
import './HomeCard.css'
import mouse from '../images/mouse.jpg'
import './Headersvg.css'
import { useState } from 'react';
// import scoot from './assets/logos/scoot.svg'


function HomeCard() {
  const [amount, setAmount] = useState(6)

  const loady = (e) => {
    setAmount(amount + 3)
  }

  return (
    <div>
      <Container>
        <Row>
            {det.slice(0, amount).map(product => (   <Col key={product.id} xs={12} sm={6} md={6}  xl={4}>

            <div class="cardd">
            

                <div class="logo-background-div" style={{backgroundColor: product.logoBackground}}>
                <img className="imagee" src={require(`${product.logo}`)} />
                </div>
              <div class="card-content">
                <p class="card-description-top"> {product.postedAt} <span style={{ fontWeight:'bolder'}}>.</span> {product.contract} </p>
                <Link to={`/job/${product.id}`} style={{ color: 'inherit', textDecoration: 'none'}}>
                  <h3 class="card-title">{product.position}</h3>
                </Link> 
                <p class="card-description-bottom" >{product.company}</p>
                <span class="card-span">{product.location}</span>
              </div>
            </div>
            
            </Col>))}
        
        </Row>
      <div style={{ paddingBottom: '40px'}}>
        <button className='load-more-button' onClick={loady}>
          Load More
        </button>
        </div>
       
     </Container>
    </div>
  )
}

export default HomeCard
