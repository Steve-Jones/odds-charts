import React, { Component } from "react";
import Chart from "react-apexcharts";

const patsOdds = [
  470,
  530,
  500,
  490,
  500,
  490,
  520,
  540,
  550,
  550,
  570,
  580,
  600,
  600,
  580,
  570,
  670,
  890,
  730,
  630,
  590,
  540,
  550,
  500,
  700,
  660,
  620,
  530,
  660,
  740,
  680,
  610,
  570,
  340,
  -130
];

const ramsOdds = [
  1700,
  1900,
  1600,
  1400,
  1100,
  910,
  940,
  1000,
  1000,
  1000,
  1100,
  1000,
  1000,
  980,
  980,
  770,
  610,
  400,
  310,
  290,
  310,
  290,
  290,
  360,
  360,
  340,
  360,
  300,
  380,
  470,
  450,
  480,
  430,
  340,
  110
];

const categories = [
  "Feb 5 2018",
  "Feb 22 2018",
  "Mar 14 2018",
  "Mar 26 2018",
  "Apr 5 2018",
  "Apr 25 2018",
  "Apr 30 2018",
  "May 8 2018",
  "May 24 2018",
  "May 29 2018",
  "Jun 19 2018",
  "Jul 16 2018",
  "Aug 4 2018",
  "Aug 27 2018",
  "Sep 1 2018",
  "Sep 11 2018",
  "Sep 18 2018",
  "Sep 25 2018",
  "Oct 2 2018",
  "Oct 9 2018",
  "Oct 16 2018",
  "Oct 23 2018",
  "Oct 30 2018",
  "Nov 6 2018",
  "Nov 13 2018",
  "Nov 20 2018",
  "Nov 27 2018",
  "Dec 4 2018",
  "Dec 11 2018",
  "Dec 18 2018",
  "Dec 24 2018",
  "Dec 31 2018",
  "Jan 7 2019",
  "Jan 14 2019",
  "Jan 20 2019"

  // "Los Angeles Chargers",
  // "Los Angeles Rams",
  // "Kansas City Chiefs",
  // "Indianapolis Colts",
  // "New England Patriots",
  // "New Orleans Saints",
  // "Chicago Bears",
  // "Pittsburgh Steelers",
  // "Green Bay Packers",
  // "Minnesota Vikings",
  // "Dallas Cowboys",
  // "Philadelphia Eagles",
  // "Atlanta Falcons",
  // "Baltimore Ravens",
  // "Cleveland Browns",
  // "Houston Texans",
  // "Seattle Seahawks",
  // "San Francisco 49ers",
  // "Carolina Panthers",
  // "Jacksonville Jaguars",
  // "New York Giants",
  // "Tampa Bay Buccaneers",
  // "Tennessee Titans",
  // "Arizona Cardinals",
  // "Buffalo Bills",
  // "Cincinnati Bengals",
  // "Denver Broncos",
  // "Detroit Lions",
  // "New York Jets",
  // "Oakland Raiders",
  // "Washington Redskins",
  // "Miami Dolphins"
];

class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Patriots",
          data: patsOdds
        },
        {
          name: "Rams",
          data: ramsOdds
        }
      ],
      options: {
        chart: {
          // height: "100%",
          // shadow: {
          //   enabled: true,
          //   color: "#000",
          //   top: 18,
          //   left: 7,
          //   blur: 10,
          //   opacity: 1
          // },
          // toolbar: {
          //   // show: false
          // },
          // zoom: {
          //   // enabled: false
          // }
        },

        xaxis: {
          type: "datetime",
          categories: categories
          // labels: { hideOverlappingLabels: true },
          // axisTicks: {
          //   show: true
          // }
          // tickAmount: 5
        },

        yaxis: {
          title: {
            text: "American Odds (+)"
          },
          labels: {
            formatter: function(val, index) {
              if (val > 0) {
                return "+" + val;
              } else {
                return val;
              }
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5
        },
        stroke: {
          show: true,
          curve: "straight",
          width: 2
        },
        title: {
          text: "Super Bowl LIII Odds",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: 25
          }
        }
      }
    };
  }

  // onClick = () => {
  //   this.setState({
  //     options: {
  //       ...this.state.options,
  //       plotOptions: {
  //         ...this.state.options.plotOptions,
  //         line: {
  //           ...this.state.options.plotOptions.line,
  //           horizontal: !this.state.options.plotOptions.line.horizontal
  //         }
  //       }
  //     }
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="100%"
          width="100%"
        />
        {/* <button onClick={this.onClick}>Change</button> */}
      </React.Fragment>
    );
  }
}

export default PopChart;
