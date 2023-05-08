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
)

function LineGraph() {
    const data =  {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            data: [150, 450, 150, 370],
            backgroundColor: 'white',
            border: 'none',
        }]
    }
    const options={
        plugins:{
        legend:{
            display: false,
        },
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
        <div><Line className="lgstyle"
            data={data}
            options={options}
        ></Line>
        </div>
    </div>
  )
}

export default LineGraph