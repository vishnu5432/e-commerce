import React from 'react';
import SideBar from './sideBar';
import Banner from './Banner';
import Boxes from './Boxes';
import Leftright from './leftright';
 


const App = () => {
  return (
      <div>
       <SideBar />
       <Leftright/>
       <Banner/>
       <Boxes/>
      </div>
  );
};

export default App;
