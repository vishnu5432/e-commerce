

import './Sidebar.css'
import React, { Component } from 'react';   
import "react-responsive-carousel/lib/styles/carousel.min.css";  
import { Carousel } from 'react-responsive-carousel'; 
import ao1 from './Images/a1.jpg';
import ao2 from './Images/a2.jpg';
// function Banner() {
//   return (
//     <Marquee>
//     <div className='banner'>
//         <img src={flipcart} className='bannerimg' alt='no img' />
//         </div>
//         <div>
//         <img src={aoo6} className='bannerimg' alt='no img' />
//     </div>
//     </Marquee>
//   )
// }

// export default Banner

class Banner extends Component {  
    render() {  
        return (  
            <Carousel autoPlay interval="3000" 
            transitionTime="2000" showThumbs={false}>  
                <div>  
                    <img style={{height:'500px'}} src={ao1} alt='noimage'/>  
                      
                </div>  
                <div>  
                    <img style={{height:'500px'}}  src={ao2} alt='noimage' />  
                     
                </div>  
                
            </Carousel>  
        );  
    }  
}  
   

export default Banner;