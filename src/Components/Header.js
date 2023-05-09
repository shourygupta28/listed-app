import { signOut } from 'next-auth/react';
import React from 'react'
import {CiSearch} from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

function Dashboard({photo}) {
  // console.log(photo);
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate(-1)
  }

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
          <div className="belldp"><img className="bell" src='./images/bell.png'/><img className="dp" onClick={handleClick} src={photo}/></div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard