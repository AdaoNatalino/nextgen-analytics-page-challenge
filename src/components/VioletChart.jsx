import React, { Component } from 'react';
import Chart from 'chart.js';
import './App.scss';
export default class VioletChart extends Component {
  refViolet = React.createRef();

  componentDidMount() {
    const violetChartRef = this.refViolet.current.getContext('2d');

    new Chart(violetChartRef, {
      type: 'line',
      data: {
        labels: ['Jun19', 'Jul19', 'Aug19', 'Sep19', 'Oct19', 'Nov19', 'Dec19'],
        datasets: [
          {
            label: 'Companies',
            backgroundColor: '#e754ca',

            data: [0, 70, 32, 100, 64, 80, 30],
          },
        ],
      },
      options: {},
    });
  }
  render() {
    return (
      <div className='comp-container'>
        <canvas
          id='violetChart'
          width='700'
          height='200'
          ref={this.refViolet}
        />
      </div>
    );
  }
}
