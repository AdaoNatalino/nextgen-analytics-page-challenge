import React, { Component } from 'react'
import Chart from "chart.js";
// import Chart from "chart.min.js";
import './App.scss';
export default class VioletChart extends Component {
  refViolet = React.createRef();
  
  componentDidMount() {
      const violetChartRef = this.refViolet.current.getContext("2d");
      
      new Chart(violetChartRef, {
          type: "line",
          data: {
              //Bring in data
              labels: ["Jun19", "Jul19", "Aug19", "Sep19", "Oct19", "Nov19", "Dec19"],
              datasets: [
                {
                  label: "Companies",
                    backgroundColor: '61005B',
                //   fillColor: "rgba(220,220,220,0.2)",
                  // fillColor: "rgb(0.56,0.93,0.56)",
                  // strokeColor: "rgba(220,220,220,1)",
                  // pointColor: "rgba(220,220,220,1)",
                  // pointStrokeColor: "#fff",
                  // pointHighlightFill: "green",
                  // pointHighlightStroke: "rgba(220,220,220,1)",
                  data: [0, 70, 32, 100, 64, 80, 30]
                },
              ]
          },
          options: {
              //Customize chart options
          }
      });
  }
  render() {
      return (
          <div className="comp-container">
              <canvas
                  id="myChart" width="720" height="200" 
                  ref={this.refViolet}
              />
          </div>
      )
  }
}
