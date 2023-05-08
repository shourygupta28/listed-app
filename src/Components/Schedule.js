import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri';

function Schedule() {
  return (
    <div className="schedule">
        <div className="uppertext">
            <div className='products'>Today's schedule</div>
            <div className='months'>See all <RiArrowRightSLine style={{color:'#858585', width:'18px', height:'15px'}}/></div>
        </div>
        <div className='schdetail'>
            <div className="line">
                <div className="schtitle">Meeting with suppliers from Kuta Bali</div>
                <div className="schtime">14.00-15.00</div>
                <div className='schtime'>at Sunset Road, Kuta, Bali </div>
            </div>
        </div>
        <div className='schdetail'>
            <div className="line2">
                <div className="schtitle">Check operation at Giga Factory 1</div>
                <div className="schtime">18.00-20.00</div>
                <div className='schtime'>at Central Jakarta </div>
            </div>
        </div>
    </div>
  )
}

export default Schedule