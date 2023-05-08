import React from 'react'
import {Pie} from 'react-chartjs-2';
import { RiArrowDownSLine } from 'react-icons/ri';
import { GiPlainCircle } from 'react-icons/gi';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);

const data={
    datasets: [{
        data: [55, 31, 14],
        backgroundColor:[
            '#98D89E',
            '#F6DC7D',
            '#EE8484'
        ],
        borderWidth: 0,
    }],
    labels: [
        'Basic Tees',
        'Custom Short Pants',
        'Super Hoodies'
    ],
}

const options={
    plugins:{
    legend:{
        display: false,
    },
},
};

function PieChart()  {
  return (
    <div className='pie'>
        <div className='labelpie'>
        <div className='products'>Top Products</div>
        <div className='months'>May-June 2021 <RiArrowDownSLine style={{color:'#858585', width:'18px', height:'15px'}}/> </div>
        </div>
        <div className='pietext'>
            <Pie data={data} className='pieimg' options={options}/>
            <div>
            <div className='labeltext'>
                <div style={{display:'flex', alignItems:'baseline'}}>
                    <GiPlainCircle style={{
                        width:'10px',
                        height: '10px',
                        color: '#98D89E'
                    }}/>
                    <div>
                    <div className='labelt'>Basic Tees</div>
                    <div className='labelp'>55%</div>
                    </div>
                </div>
            </div>
            <div className='labeltext'>
                <div style={{display:'flex', alignItems:'baseline'}}>
                    <GiPlainCircle style={{
                        width:'10px',
                        height: '10px',
                        color: '#F6DC7D'
                    }}/>
                    <div>
                    <div className='labelt'>Custom Short Pants</div>
                    <div className='labelp'>31%</div>
                    </div>
                </div>
            </div>
            <div className='labeltext'>
                <div style={{display:'flex', alignItems:'baseline'}}>
                    <GiPlainCircle style={{
                        width:'10px',
                        height: '10px',
                        color: '#EE8484'
                    }}/>
                    <div>
                    <div className='labelt'>Super Hoodies</div>
                    <div className='labelp'>14%</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PieChart