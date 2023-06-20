import React from 'react'
import { Container } from 'react-bootstrap'
import './DetCard.css'


function DetCard() {
  return (
    <div>
      <Container>
        <div className='container-det-card'>
        <p class="det-description-top"> 1w ago <span style={{ fontWeight:'bolder'}}>.</span> Part Time </p>
        <h2 class="det-title">Senior Software Engineer
        <button className='det-desc-button'>Apply Now</button>
        </h2>
                <span class="det-span">United Kingdom</span>
                <p class="det-description" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h4>Requirements</h4>
                <p class="det-description" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra magna ac placerat vestibulum lectus mauris. Tincidunt vitae semper quis lectus nulla at volutpat. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Amet mattis vulputate enim nulla. Aliquet porttitor lacus luctus accumsan tortor posuere. Interdum varius sit amet mattis vulputate. Rhoncus mattis rhoncus urna neque viverra justo. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Netus et malesuada fames ac turpis. Turpis massa sed elementum tempus egestas sed sed risus pretium. Condimentum lacinia quis vel eros donec. Pretium nibh ipsum consequat nisl vel pretium. Tempor orci eu lobortis elementum nibh. Amet dictum sit amet justo donec. Tristique sollicitudin nibh sit amet.</p>
                <p ><span style={{paddingRight:'25px'}}>.</span> Morbi interdum mollis sapien. Sed</p>
                <p><span style={{paddingRight:'25px'}}>.</span> Morbi interdum mollis sapien. Sed</p>
                <p><span style={{paddingRight:'25px'}}>.</span> Morbi interdum mollis sapien. Sed</p>
                <p><span style={{paddingRight:'25px'}}>.</span> Morbi interdum mollis sapien. Sed</p>
                <h4 style={{marginTop:'45px'}}>What You Will Do</h4>
                <p class="det-description">Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Non consectetur a erat nam. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Sem et tortor consequat id porta nibh. Eget aliquet nibh praesent tristique. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Pretium lectus quam id leo in vitae turpis massa sed. Ut eu sem integer vitae justo eget magna fermentum iaculis. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper.</p>
                <p><span style={{paddingRight:'25px'}}>.</span> Morbi interdum mollis sapien. Sed</p>
                <p><span style={{paddingRight:'25px'}}>.</span> Morbi interdum mollis sapien. Sed</p>
                <p><span style={{paddingRight:'25px'}}>.</span> Morbi interdum mollis sapien. Sed</p>
                <p><span style={{paddingRight:'25px', color:'blue', fontWeight:'1000'}}>.</span> Morbi interdum mollis sapien. Sed</p>
            
        </div>
      </Container>
    </div>
  )
}

export default DetCard
