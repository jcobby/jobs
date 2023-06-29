import React from 'react'
// import './ListPage.css'
import { Navbar, Container, FormControl, Form, Button, Row, Col, Image } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import shopping_bag from '../images/shopping_bag.png'
import det from '../SomeDetails'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
import Header from '../components/Headersvg';
import HomeNav from '../components/HomeNav';
import HomeCard from '../components/HomeCard';

function ListPage() {
  return (
    <div className='devian'>
      <div >
        <Header />
        <HomeNav />
        <HomeCard />

        
      </div>
     </div>
  )
}

export default ListPage
