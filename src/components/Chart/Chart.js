import React, { useState, useEffect } from 'react';


import { fetchDailyData } from '../../fetchData';

//D3.js
import * as d3 from "d3";

import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState({});
    useEffect(() => {
        const getData = async () => {
            const { initialDailyData  } = await fetchDailyData();
            setDailyData(initialDailyData);
        }
        getData();
    },[]
       
    )

    
    const barChart = (


        confirmed ? (
            <Bar
                data={{
                    labels: ['infected', 'recovered', 'deaths'],
                    datasets: [
                        {
                            label: 'people',
                            backgroundcolor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `current state in ${country}` },
                }}
            />
        ) : null
    );
  
    
    return (
        <div className={styles.container}>
            {barChart }
        </div>
    );
};

export default Chart;