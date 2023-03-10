import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ResponsiveDrawer from './ResponsiveDrawer'



const Dashboard = () => {
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);

  useEffect(() => {
    const chart1 = new Chart(chart1Ref.current, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [12, 19, 3, 5, 2, 3, 7]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    const chart2 = new Chart(chart2Ref.current, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Revenue',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
            data: [20, 30, 40, 50, 60, 70, 80]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    return () => {
      chart1.destroy();
      chart2.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chart1Ref} />
      <canvas ref={chart2Ref} />
      <ResponsiveDrawer/>
    </div>
    
  );
};

export default Dashboard;
