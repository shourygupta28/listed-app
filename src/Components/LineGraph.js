import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { RiArrowDownSLine } from 'react-icons/ri';
import { GiPlainCircle } from 'react-icons/gi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph() {
    const data =  {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            data: [150, 470, 150, 370, 200],
            borderColor: '#9BDD7C',
            tension: 0.5,
        },
        {
            data: [200, 370, 250, 170, 200],
            borderColor: '#E9A0A0',
            tension: 0.5,        
    }],
    };
    const options={
        maintainAspectRatio: false,
        plugins:{
        legend:{
            display: false,
        },
        scales:{
            y:{
                beginAtZero: true,
                min: 0,
            }    
        }
    },
    };
  return (
    <div className="linegraph">
        <div className="products">Activities</div>
        <div className='lgdetails'>
            <div className="months">May-June 2021 <RiArrowDownSLine style={{color:'#858585', width:'18px', height:'15px'}}/></div>
            <div className='labellg'>
                <div style={{display: 'flex', alignItems: 'center', marginRight: '1.75rem'}}><GiPlainCircle style={{
                        width:'10px',
                        height: '10px',
                        color: '#E9A0A0'
                    }}/><div className='guestlg'>Guest</div></div>
                <div style={{display: 'flex', alignItems: 'center', marginRight: '0.75rem'}}><GiPlainCircle style={{
                        width:'10px',
                        height: '10px',
                        color: '#98D89E'
                    }}/><div className='userlg'>User</div></div>
            </div>
        </div>
        <div style={{
            width: '95%',
            height: '220px',
            padding: '1rem',
            marginTop: '1rem',
        }}><Line 
            data={data}
            options={options}
        ></Line>
        </div>
    </div>
  )
}

export default LineGraph