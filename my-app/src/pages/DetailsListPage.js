import React from 'react'
import './DetailsListPage.css'
import Headersvg from '../components/Headersvg';
import HomeNav from '../components/HomeNav';
import DetailsPageNav from '../components/DetailsPageNav';
import DetCard from '../components/DetCard';
import Footer from '../components/Footer'


function DetailsListPage() {
  return (
    <div>
       <Headersvg />
       <DetailsPageNav />
       <DetCard />
       <Footer />
       
    </div>
  
  )
}

export default DetailsListPage
