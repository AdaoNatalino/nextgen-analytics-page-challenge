import React, { Component } from 'react';
import Chart from 'chart.js';
import './App.scss';
export default class GreenChart extends Component {
  refGreen = React.createRef();

  componentDidMount() {
    const greenChartRef = this.refGreen.current.getContext('2d');

    new Chart(greenChartRef, {
      type: 'line',
      data: {
        labels: ['Jun19', 'Jul19', 'Aug19', 'Sep19', 'Oct19', 'Nov19', 'Dec19'],
        datasets: [
          {
            label: 'Individuals',
            backgroundColor: '#54e7bb',

            data: [0, 90, 27, 45, 25, 100, 76],
          },
        ],
      },
      options: {},
    });
  }
  render() {
    return (
      <div className='ind-container'>
        <canvas id='greenChart' width='700' height='200' ref={this.refGreen} />
      </div>
    );
  }
}
