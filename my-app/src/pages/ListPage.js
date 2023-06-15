import React from 'react'
import './ListPage.css'
import { Navbar, Container, FormControl, Form, Button, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import shopping_bag from '../images/shopping_bag.png'
import det from '../SomeDetails'



function ListPage() {
  return (
    <div className='devian'>
      <div style={{ position: 'relative', marginBottom: '180px'}}>
        <svg className='svg-background' width="1865" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 0H0v60c0 85.228 64.772 110 190 100h1680V0z" fill="#5964E0" />

            <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="160"><path d="M1440 0H0v60c0 55.228 44.772 100 100 100h1340V0z" fill="#fff"/></mask>
        <g mask="url(#a)" fill-rule="evenodd" clip-rule="evenodd" fill="#fff">
            <path opacity=".081" d="M1163.89-205.424c21.12-23.963 60.32-15.63 69.88 14.853l114.11 364.163c9.39 29.936-16.96 58.887-47.64 52.364l-366.492-77.899c-30.685-6.522-42.976-43.685-22.23-67.217l252.372-286.264zM254.539-323.259c-3.117-31.792 29.711-54.779 58.52-40.976L657.22-199.336c28.291 13.555 31.498 52.566 5.8 70.56L356.104 86.129c-25.698 17.994-61.259 1.637-64.321-29.584L254.539-323.26zM-71.46 71.741c-3.119-31.792 29.71-54.78 58.52-40.976l344.16 164.899c28.291 13.555 31.498 52.566 5.8 70.56L30.104 481.129c-25.698 17.994-61.26 1.637-64.32-29.584L-71.462 71.741z"/>
            <text x="12.5%" y="30%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-size="32" font-weight="bold" >
        devjobs
      </text>
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c1.516 0 2.925.566 3.978 1.523A3.979 3.979 0 008 1a4.014 4.014 0 00-2.821 1.179A3.927 3.927 0 004 5c0 1.095.463 2.105 1.179 2.821A3.927 3.927 0 008 9a4.034 4.034 0 003.974-3.548c.017.18.026.364.026.548a6.02 6.02 0 01-1.768 4.232A6.02 6.02 0 016 12a5.89 5.89 0 01-4.232-1.768A6.02 6.02 0 010 6a5.89 5.89 0 011.768-4.232A6.02 6.02 0 016 0z" fill="#FFF" fill-rule="nonzero"/></svg>
            </g>
            </svg>


          <Navbar bg="tranaparent" expand="lg" className="navbar">
          <Container style={{ overflow: 'hidden'}} > 
              <Form className="d-flex ">
                <input className="input-search" type="text" placeholder="Filter by title, companies, expertise..." style={{ width:'530px', height:'90px',  border: 'none', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
                
                </input>
                        
                          <svg  className="search" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" fill-rule="nonzero"/></svg>
                            

                <input className="input-location" type="text" placeholder="Filter by location" style={{ width:'360px', borderTop: 'none', borderBottom: 'none', borderRadius: '0' }} />
                <svg className="location" width="17" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" fill-rule="nonzero"/></svg>

                <input className="input-check" type="text" placeholder="Full Time Only" style={{  width:'410px', border: 'none', borderBottomRightRadius: '10px', borderTopRightRadius: '10px'}}>
                  </input>
                  {/* <svg className="check" width="15" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.57l3.572 3.572L13.714 1" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg> */}

                  <button className="button-search" style={{ }}>Search</button>
              </Form>
              </Container>
          </Navbar>
          </div>

<Container>
  <Row>
    {det.map(product => (   <Col key={product._id} sm={12} md={6} lg={3} xl={4}>

    <div class="cardd">
    <img class="imagee" src={shopping_bag}></img>

    <div class="card-content">
      
    <p class="card-description-top">20h ago  <span style={{ fontWeight:'bolder'}}>.</span> Part Time</p>

      
      <h2 class="card-title">{product.title}</h2>

      <p class="card-description-bottom" >Blogr</p>
      <span class="card-span">United States</span>
    </div>
    </div>
    </Col>))}
    </Row>
{/* //     <Row>





//     <Col>
//     <img class="imagee" src={shopping_bag}></img>

//     <div class="cardd">
// <p class="card-description-top">20h ago  <span style={{ fontWeight:'boldest'}}>.</span> Part Time</p>
//     <div class="card-content">
      
      
      
//       <h2 class="card-title">Haskell and PureScript Dev</h2>

//       <p class="card-description-bottom" >Blogr</p>
//       <span class="card-span">United States</span>
//     </div>
//     </div>











//     <div class="card-content">
//       <h2 class="card-title" >Card 2</h2>
//       <p class="card-description">Card 2 description goes here.</p>
//     </div>

//     <div class="card-content">
//       <h2 class="card-title">Card 2</h2>
//       <p class="card-description">Card 2 description goes here.</p>
//     </div>
//     </Col>

//     <Col>
//     <div class="card-content">
//       <h2 class="card-title">Card 1</h2>
//       <p class="card-description">Card 1 description goes here.</p>
//     </div>

//     <div class="card-content">
//       <h2 class="card-title">Card 2</h2>
//       <p class="card-description">Card 2 description goes here.</p>
//     </div>

//     <div class="card-content">
//       <h2 class="card-title">Card 2</h2>
//       <p class="card-description">Card 2 description goes here.</p>
//     </div>
//     </Col>

//     <Col>
//     <div class="card-content">
//       <h2 class="card-title">Card 1</h2>
//       <p class="card-description">Card 1 description goes here.</p>
//     </div>

//     <div class="card-content">
//       <h2 class="card-title">Card 2</h2>
//       <p class="card-description">Card 2 description goes here.</p>
//     </div>

//     <div class="card-content">
//       <h2 class="card-title">Card 2</h2>
//       <p class="card-description">Card 2 description goes here.</p>
//     </div>
//     </Col>
//   </Row> */}
</Container>


        


    </div>
  )
}

export default ListPage
