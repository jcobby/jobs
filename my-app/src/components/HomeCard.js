import React from 'react'
import { Navbar, Container, FormControl, Form, Button, Row, Col, Image } from 'react-bootstrap';
import shopping_bag from '../images/shopping_bag.png'
import det from '../SomeDetails'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
import './HomeCard.css'



function HomeCard() {
  return (
    <div>
      <Container>
        <Row>
            {det.map(product => (   <Col key={product._id} sm={12} md={6} lg={3} xl={4}>

            <div class="cardd">
            <img class="imagee" src={shopping_bag}></img>

              <div class="card-content">
                <p class="card-description-top"> {product.time} <span style={{ fontWeight:'bolder'}}>.</span> {product.length} </p>
                <Link to={`/job/${product.title}`} style={{ color: 'inherit', textDecoration: 'none'}}>
                  <h2 class="card-title">{product.title}</h2>
                </Link> 
                <p class="card-description-bottom" >{product.company}</p>
                <span class="card-span">{product.country}</span>
              </div>
            </div>
            </Col>))}
        </Row>
     </Container>
    </div>
  )
}

export default HomeCard
