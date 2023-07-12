import React, { useEffect, useState }  from 'react'
import { Container, Navbar, Row,
  Col, } from 'react-bootstrap'
import './DetailsPageNav.css'
import mouse from '../images/mouse.jpg'
import det from '../SomeDetails'
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'



function DetailsPageNav() {
  const { id } = useParams();

 
// const id = 9
  const filteredItems = det.filter((item) => item.id === parseInt(id))
console.log(filteredItems);
console.log('this is the company ' + filteredItems.company)

filteredItems.forEach((item) => {
  console.log('This is the company: ' + item.company + item.location);
});


const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  // Cleanup the event listener on component unmount
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []); // Empty dependency array to run the effect only once


  return (
    <div>
      {windowWidth > 505 ? (
    <Container className='containerdetnav' fluid>
      <Navbar bg="transparent" expand="lg" className="navbar">
        {filteredItems.map(item => (
          <div key={item.id} className='cardd-det-nav'>
            <div className='image-nav' style={{ backgroundColor: item.logoBackground }}>
            <img src={require(`${item.logo}`)} className='imagee-det'></img>

            </div>
            <div className='dev-title'>
              <h4 style={{ fontWeight: 'bolder' }}>{item.company}</h4>
              <p className='dev-description'>{item.company}.com</p>
            </div>
            <Link to={`${item.website}`}>
            <button className='dev-button'>Company Site</button>

            </Link>
          </div>
        ))}
      </Navbar>
    </Container>) : (
      <div>
       <Row>
       {det.map((product) => (
         <Col key={product.id} xs={12} sm={6} md={6} xl={4}>
           <div class="cardd">
             <div
               class="logo-background-div"
               style={{ backgroundColor: product.logoBackground }}
             >
               <img className="imagee" src={require(`${product.logo}`)} />
             </div>
             <div class="card-content">
               <p class="card-description-top">
                 {" "}
                 {product.postedAt}{" "}
                 <span style={{ fontWeight: "bolder" }}>.</span>{" "}
                 {product.contract}{" "}
               </p>
               <Link
                 to={`/job/${product.id}`}
                 style={{ color: "inherit", textDecoration: "none" }}
               >
                 <h3 class="card-title">{product.position}</h3>
               </Link>
               <p class="card-description-bottom">{product.company}</p>
               <span class="card-span">{product.location}</span>
             </div>
           </div>
         </Col>
       ))}
     </Row> 
     </div>
    )
       }
    
  </div>
  
  )
}

export default DetailsPageNav
