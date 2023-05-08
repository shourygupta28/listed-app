import React from 'react'

function Cards() {
  return (
    <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-between', marginTop:'2rem'}}>
    <div className="cards">
        <div style={{textAlign: 'right',}} >
            <img src='./images/revenue.png'/>
        </div>
        <div >
            <div className="cardcont">Total Revenues</div>
            <div className="cardvalues" style={{paddingTop: '0.5rem'}}>$2,129,430</div>
        </div>
    </div>
    <div className="cards2">
        <div style={{textAlign: 'right',}} >
            <img src='./images/tticon.png'/>
        </div>
        <div >
            <div className="cardcont">Total Transactions</div>
            <div className="cardvalues" style={{paddingTop: '0.5rem'}}>1520</div>
        </div>
    </div>
    <div className="cards3">
        <div style={{textAlign: 'right',}} >
            <img src='./images/like.png'/>
        </div>
        <div >
            <div className="cardcont">Total Likes</div>
            <div className="cardvalues" style={{paddingTop: '0.5rem'}}>9721</div>
        </div>
    </div>
    <div className="cards4">
        <div style={{textAlign: 'right',}} >
            <img src='./images/users.png'/>
        </div>
        <div >
            <div className="cardcont">Total Users</div>
            <div className="cardvalues" style={{paddingTop: '0.5rem'}}>892</div>
        </div>
    </div>
</div>
  )
}

export default Cards