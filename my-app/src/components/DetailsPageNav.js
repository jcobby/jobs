import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
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


  return (
    <div>
    <Container className='containerdetnav'>
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
    </Container>
  </div>
  
  )
}

export default DetailsPageNav
