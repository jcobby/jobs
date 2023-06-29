import React from 'react'
import './Footer.css'
import det from '../SomeDetails'
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development'

function Footer() {

const { id } = useParams()

const filteredItems = det.filter(items => items.id === parseInt(id))



  return (
<div>
    { filteredItems.map( items => 
    <div className='det-footer'>
        <div className='det-footer-container'>
            <h3 className='h3-foot'>{items.position}</h3> 
            <button className='det-footer-button'>Apply Now</button>
        </div>
     
     <p className='det-footer-desc'>So Digital Inc.</p>
    </div>
    )
    }
    </div>
  )
}

export default Footer
