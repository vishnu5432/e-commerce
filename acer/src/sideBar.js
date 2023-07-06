import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import"./Sidebar.css"
import 'font-awesome/css/font-awesome.min.css';

function SideBar() {
    return (
        <>
        <div className="headercontainer">
        <div className="header" >
            <h1 className="header_1">GSM Reatil</h1>
            <p className="header_2">Fullfill your Budget</p>
        </div>
        <div className="header1">
           <div className="header_3">
               <div className="header_5">
                  <select className="select">
                   <option >All</option>
                  </select>
                  <div>
                  <input type="text" className="input"></input>
                  <button className="search">search</button>
                  </div>
                 <div className="sign" >
                    <button className="bt2">
                   <div className="welcome">Welcome GSM </div>
                   <div className="welcome">Signin here </div>
                   </button>
                 </div>
                  <div className="image1" >
                     <FontAwesomeIcon icon={faShoppingCart} className="font" />
                     <button className="card1">Card</button>
                </div>
                

                </div>
              
           </div>
           <div className="header_4">
               <button className="btn1">COOCKING MATERIALS </button>
               <button className="btn1">BEVERAGES MIX & SNACKS</button>
               <button className="btn1">PERSONAL CARE</button>
               <button className="btn1">HOUSE HOLD CARE & CLEANING</button>
           </div>
        </div>
         </div>  
        </>
    )
}

export default SideBar;