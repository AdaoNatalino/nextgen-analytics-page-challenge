import React, { Component } from 'react';
import Chart from 'chart.js';
// import Chart from "chart.min.js";
import './App.scss';
export default class GreenChart extends Component {
  refGreen = React.createRef();

  componentDidMount() {
    const greenChartRef = this.refGreen.current.getContext('2d');

    new Chart(greenChartRef, {
      type: 'line',
      data: {
        //Bring in data
        labels: ['Jun19', 'Jul19', 'Aug19', 'Sep19', 'Oct19', 'Nov19', 'Dec19'],
        datasets: [
          {
            label: 'Individuals',
            backgroundColor: '#54e7bb',
            //   fillColor: "rgba(220,220,220,0.2)",
            // fillColor: "rgb(0.56,0.93,0.56)",
            // strokeColor: "rgba(220,220,220,1)",
            // pointColor: "rgba(220,220,220,1)",
            // pointStrokeColor: "#fff",
            // pointHighlightFill: "green",
            // pointHighlightStroke: "rgba(220,220,220,1)",
            data: [0, 90, 27, 45, 25, 100, 76],
          },
        ],
      },
      options: {
        //Customize chart options
      },
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
