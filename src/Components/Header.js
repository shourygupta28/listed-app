import React from 'react'
import {CiSearch} from 'react-icons/ci';

function Dashboard() {
  return (
    <div>
      <div className="subheader">
        <div className="dashleft">Dashboard</div>
        <div className="dashright">
          <div className="searchbox">
            <input className="search" placeholder='Search...'></input>
            <CiSearch style={{
              color: '#858585',
              marginTop: '0.5rem'
            }}/>
          </div> 
          <div className="belldp"><img className="bell" src='./images/bell.png'/><img className="dp" src='./images/dp.png'/></div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard