import globalTheme from '../../config/theme';

const lightGrey = '#74777b';
const chartTheme = {
  axis: {
    style: {
      axis: {
        fill: lightGrey,
        stroke: lightGrey,
        strokeWidth: 1,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      axisLabel: {
        // padding: 40,
        // padding: { left: 20, top: 30, bottom: 30, right: 30 },
        textAnchor: 'middle',
        strokeWidth: 0,
        // Changes the text color of the labels
        fill: globalTheme.LIGHT_FONT,
      },
      grid: {
        fill: lightGrey,
        // remove the grid behind the chart
        // stroke: 'none',
        stroke: lightGrey,
        strokeWidth: 1,
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
        fill: lightGrey,
        padding: 10,
      },
    },
  },
  chart: {
    // padding: 70,
  },
  line: {
    style: {
      data: {
        fill: 'transparent',
        stroke: globalTheme.ACCENT_PURPLE,
      },
      labels: {
        padding: { left: 90, top: 50, right: 10, bottom: 50 },
      },
    },
  },
};

export default chartTheme;
