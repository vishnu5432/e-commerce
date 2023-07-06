// import React, { Component } from 'react';   
// import "react-responsive-carousel/lib/styles/carousel.min.css";  
// import { Carousel } from 'react-responsive-carousel';  
import aoo1 from './Images/cs1.png';
import aoo2 from './Images/cs2.jpg';
import aoo3 from './Images/cs3.png';
import aoo4 from './Images/download.jpg';
import aoo5 from './Images/download (1).jpg';
import aoo6 from './Images/Amazon-Flipkart.avif';

import Marquee from "react-fast-marquee";
// class Leftright extends Component {  
//     render() {  
//         return (  
//             <Carousel autoPlay interval="3000" 
//             transitionTime="2000" showThumbs={false}>  
//                 <div>  
//                     <img style={{height:'500px'}} src={aoo1} alt='noimage'/>  
                      
//                 </div>  
//                 <div>  
//                     <img style={{height:'500px'}}  src={aoo2} alt='noimage' />  
                     
//                 </div>  
//                 <div>  
//                     <img style={{height:'500px'}}  src={aoo3} alt='noimage'/>  
                      
//                 </div>  
//             </Carousel>  
//         );  
//     }  
// }  
   

// export default Leftright;



function Leftright() {
    return (
        <Marquee>
            <div>
              <img style={{height:'300px'}} src={aoo1} alt='noimage'/>  
            </div>
            <div>
              <img style={{height:'300px'}}  src={aoo2} alt='noimage' />                   
            </div>
            <div>
              <img style={{height:'300px'}}  src={aoo3} alt='noimage'/> 
            </div>
            <div>
              <img style={{height:'300px'}}  src={aoo4} alt='noimage'/> 
            </div>
            <div>
              <img style={{height:'300px'}}  src={aoo5} alt='noimage'/> 
            </div>
            <div>
              <img style={{height:'300px'}}  src={aoo6} alt='noimage'/> 
            </div>
        </Marquee>
    )
}

export default Leftright;