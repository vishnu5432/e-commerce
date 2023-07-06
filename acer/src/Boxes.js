import React from 'react'
import img1 from './Images/1461503.webp';
import img2 from './Images/3-kljl39663grey.webp';
import img3 from './Images/40-10398369.webp';
import img4 from './Images/75-flow.webp';
import img5 from './Images/acs05974.webp';
import img6 from './Images/m-fc4358.webp';
import img7 from './Images/na-na-neck.webp';
import img8 from './Images/nord-buds-.webp';
import img9 from './Images/sprig.webp';
import img10 from './Images/xl-teetrack.webp';
function Boxes() {
  return (
    <div className='boxcontainer'>
        <div className='boxes'>
            <img src={img1} alt='on img' className='boximg' />
            <div>Desberry,Imara & more</div>
            <div style={{color:"green"}}>From $40</div>
            <button className='buy'>Buy Now</button>
            
        </div>
        <div className='boxes'>
            <img src={img2} alt='on img'  className='boximg' />
            <div>Killer,RHX & more</div>
            <div style={{color:"green"}}>From $25</div>
            <button className='buy'>Buy Now</button>
        </div>
        <div className='boxes'>
            <img src={img3} alt='on img'  className='boximg' />
            <div>Roadster,here & now</div>
            <div style={{color:"green"}}>From $35</div>
            <button className='buy'>Buy Now</button>
        </div>
        <div className='boxes'>
            <img src={img4} alt='on img'  className='boximg' />
            <div>Travel & more</div>
            <div style={{color:"green"}}>From $60</div>
            <button className='buy'>Buy Now</button>
        </div>
        <div className='boxes'>
            <img src={img5} alt='on img'  className='boximg' />
            <div>Phone case & more</div>
            <div style={{color:"green"}}>From $10</div>
            <button className='buy'>Buy Now</button>
        </div>
       
        <div className='boxes'>
            <img src={img6} alt='on img'  className='boximg' />
            <div>Kids shirt & more</div>
            <div style={{color:"green"}}>From $20</div>
            <button className='buy'>Buy Now</button>
        </div>
        <div className='boxes'>
            <img src={img7} alt='on img'  className='boximg' />
            <div>Jewellery & more</div>
            <div style={{color:"green"}}>From $50</div>
            <button className='buy'>Buy Now</button>
        </div>
        <div className='boxes'>
            <img src={img8} alt='on img'  className='boximg' />
            <div>Treuwireless Earphones</div>
            <div style={{color:"green"}}>From $12</div>
            <button className='buy'>Buy Now</button>
        </div>
        <div className='boxes'>
            <img src={img9} alt='on img'  className='boximg' />
            <div>Tempered glass & more</div>
            <div style={{color:"green"}}>From $10</div>
            <button className='buy'>Buy Now</button>
        </div>
        <div className='boxes'>
            <img src={img10} alt='on img'  className='boximg' />
            <div>Mens clothes & more</div>
            <div style={{color:"green"}}>From $30</div>
            <button className='buy'>Buy Now</button>
            </div>
        </div>
       
  )
}

export default Boxes