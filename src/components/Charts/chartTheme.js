import globalTheme from '../../config/theme';

const lightGrey = '#74777b';
const baseColor = '#fff';
const chartTheme = {
  axis: {
    style: {
      axis: {
        /*
        * This is the axis lines on the left border and bottom border
        * */

        fill: baseColor,
        stroke: baseColor,
        strokeWidth: 1,
        strokeDasharray: '10, 5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        // fill: baseColor,
        //stroke: baseColor,
        // strokeWidth: 1,
        // strokeLinecap: 'round',
        // strokeLinejoin: 'round',
      },
      axisLabel: {
        // padding: 40,
        // padding: { left: 20, top: 30, bottom: 30, right: 30 },
        // textAnchor: 'middle',
        // strokeWidth: 0,
        // Changes the text color of the labels
        // fill: baseColor,
      },
      grid: {
        /*
        * This is just the grid but not the lines on the left border or bottom border
        * */

        fill: baseColor,
        // remove the grid behind the chart
        // stroke: 'none',
        stroke: baseColor,
        strokeWidth: 1,
        strokeDasharray: '10, 5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      ticks: {
        fill: 'transparent',
        stroke: 'transparent',
        strokeWidth: 0,
      },
      tickLabels: {
        /*
        * This is responsible for how close the data markers are to the actual grid, not the actual title labels
        * */

        // stroke is not doing anything
        // stroke: lightGrey,
        strokeWidth: 0,
        fill: baseColor,
        padding: 10,
      },
    },
  },
  chart: {
    padding: { left: 70, top: 20, right: 40, bottom: 40 },
  },
  line: {
    style: {
      data: {
        // fill: 'transparent',
        stroke: '#fff',
        strokeWidth: 4,
      },
      labels: {
        // padding: { left: 90, top: 50, right: 10, bottom: 50 },
      },
    },
  },
};

export default chartTheme;
