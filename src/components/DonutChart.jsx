import React, { Component } from 'react';
import Chart from 'chart.js';
import './App.scss';
export default class DonutChart extends Component {
  refDonut = React.createRef();

  componentDidMount() {
    const donutChartRef = this.refDonut.current.getContext('2d');

    new Chart(donutChartRef, {
      type: 'doughnut',
      data: {
        labels: ['Individuals', 'Companies'],

        datasets: [
          {
            label: 'Total Signups',
            backgroundColor: ['#54e7bb','#e754ca'],

            data: [284, 364],
          },
        ],
      },
      options: {
        cutoutPercentage: 85,
        legend: {
          display: true,
          labels: {
            
          },
        },
      },
    });
  }
  render() {
    return (
      <div className='signups-container'>
        <canvas
          id='donutChart'
          width='30px'
          height='30px'
          ref={this.refDonut}
        />
      </div>
    );
  }
}
