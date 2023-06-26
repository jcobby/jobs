import React from 'react'
import './Headersvg.css'
import headerdesktop from '../images/bg-pattern-header.svg'
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import logo from '../images/logo.svg'


function Headersvg() {
  return (
    <div className='head-div'>
            <img className='svg-header' src={headerdesktop}></img>
    <div style={{display: 'flex'}}>
    <img className='svg-logo' src={logo}></img>

<div className='svg-switch'>
  
<img className='' src={moon}></img>


<label class="toggle-switch">
<input type="checkbox" />
<span class="slider"></span>
</label>

<img className='' src={sun}></img>
</div>
</div>        

       
    </div>
  )
}

export default Headersvg
