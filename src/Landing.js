import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Schedule from './Components/Schedule';
import PieChart from './Components/PieChart';
import LineGraph  from './Components/LineGraph';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Landing() {
    const location = useLocation();
    console.log(location.state) 
    const user=location.state.user;
    const photo=location.state.user.picture;
    console.log(user);
    axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2')
    .then(function (response) {
    // handle success
    console.log(response['data']);
  })
    return (
    <div className="App">
      <Sidebar/>
      <div className="rights">
        <Header photo={photo}/>
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
