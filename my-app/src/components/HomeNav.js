import React from 'react'
import { Navbar, Container, FormControl, Form, Button, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
import './HomeNav.css'
import search from '../images/icon-search.svg'
import location from '../images/icon-location.svg'
import check from '../images/icon-check.svg'
import det from '../SomeDetails'



function HomeNav() {
  return (
    <div>
      <Container className='containernav'>
       <Navbar bg="tranparent" expand="lg" className="navbar">
          {/* <Container >  */}
          {/* style={{ overflow: 'hidden'}}  */}
              <Form className="d-flex ">
                <input className="input-search" type="text" placeholder="Filter by title, companies, expertise..." style={{ width:'530px', height:'90px',  border: 'none', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
                
                </input>
                        <img className="search" src={search} ></img>
                          {/* <svg  className="search" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" fill-rule="nonzero"/></svg> */}
                            

                <input className="input-location" type="text" placeholder="Filter by location" />
                <img className="location" src={location} ></img>
                {/* <svg className="location" width="17" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" fill-rule="nonzero"/></svg> */}

                <div className="input-check" type="none" placeholder="Full Time Only" style={{  width:'410px', border: 'none', borderBottomRightRadius: '10px', borderTopRightRadius: '10px'}}>
               <h4 className='h4-foot'>Full Time Only</h4> 
                  </div>
                  {/* <svg className="check" width="15" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.57l3.572 3.572L13.714 1" stroke="#FFF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg> */}

                  <label class="checkbox-container">
  <input type="checkbox"  />
  <span class="checkmark"></span>
  
</label>
                  <button className="button-search" >Search</button>
              </Form>
              {/* </Container> */}
          </Navbar>
          </Container>
    </div>
  )
}

export default HomeNav
