import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Schedule from './Components/Schedule';
import PieChart from './Components/PieChart';
import LineGraph  from './Components/LineGraph';

function Landing() {
  return (
    <div className="App">
      <Sidebar/>
      <div className="rights">
        <Header/>
        <Cards/>
        <LineGraph/>
        <div className='bottomright'>
          <PieChart/>
          <Schedule/>
        </div>
        
      </div>
      
    </div>
  );
}

export default Landing;
