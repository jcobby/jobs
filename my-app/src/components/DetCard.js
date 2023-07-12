import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './DetCard.css'
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development'
import det from '../SomeDetails'



function DetCard() {
  const { id } = useParams();

 
  // const id = 9
  // det.filter((item) => {console.log(item)} )

    const filteredItems = det.filter((item) => item.id === parseInt(id))
  // console.log(filteredItems);

const requirementsItemm = filteredItems.map(item => item.requirements.items)

const roleItems = filteredItems.map(item => item.role.items)

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


  // const itemm = filteredItems.requirements
  // console.log('the requirements ' + itemm)
  // console.log('the requirements plus plsd ' + itemm[1])

  // itemm.filter((itemo) => {
  //   console.log('This is the company: ' + itemo.items);
  // });

 

  return (
    <div>
      <Container>
        { filteredItems.map(items => 
        <div className='container-det-card'>
        <p class="det-description-top"> {items.postedAt} <span style={{ fontWeight:'1000', margin: '4px'}}>. </span>{ items.contract}</p>
       {windowWidth > 505 ? (<div> <h2 class="det-title">{items.position}
        <button className='det-desc-button'>Apply Now</button>
        </h2>  <span class="det-span">{items.location}</span> </div>
         ) : (<div><h2 class="det-title">{items.position}
         
         </h2>  <span class="det-span">{items.location}</span>
         <button className='det-desc-button'>Apply Now</button></div>)
        }
              
                <p class="det-description" >{items.description}</p>
                <h4 className='h4-size'>Requirements</h4>
                <p class="det-description" >{items.requirements.content}</p>
             

                { 
                requirementsItemm.map( (itemo, index) => 
                  <ul key={index} style={{ listStyle: 'none'}}>
                    { 
                    itemo.map( (str,subIndex) =>
                    <li key={subIndex} style={{ paddingLeft: '0em', textIndent: '-2.0em' }} className='det-p-desc'> <span style={{ color: 'blue', paddingRight: '1.3em' }}>•</span> {str} </li>
                    )
                  }
                </ul>
                )
                }

                <h4 className='h4-size' style={{marginTop:'45px'}}>What You Will Do</h4>
                <p class="det-description">{items.role.content}</p>

                {
                 roleItems.map( (itemo, index) => 
                  <ul key={index} style={{ listStyleType: 'none' }}>
                    { itemo.map( (str,subIndex) =>
                    <li key={subIndex} style={{ paddingLeft: '0em', textIndent: '-2.0em' }} className='det-p-desc' > <span style={{ color: 'blue', paddingRight: '1.1em' }}>{subIndex + 1}</span> {str} </li>
                    )
                  }
                </ul>
                )
                }
              
        </div>
        ) 
}
      </Container>
    </div>
  
)
}

export default DetCard
