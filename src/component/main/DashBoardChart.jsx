import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  spanGaps: true,

  responsive: true,
  pointStyle: 'line',

  plugins: {
    legend: {
      labels: {
        font: {
          family: "'Noto Sans KR', 'serif'",
          lineHeight: 1,
        },
      },
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: true,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    y: {
      ticks: {
        display: true,
        beginAtZero: false,
      },
      grid: {
        drawBorder: false,
        display: true,
      },
    },
  },
};

const labels = ['January', 'February', 'January', 'February', 'January', 'February'];

export const data = {
  labels,
  datasets: [
    {
      data: ['112', '424', '444', '112', '424', '444', '777'],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      data: ['162', '324', '414', '162', '324', '414', '777'],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const DashBoardChart = () => {
  return <Line options={options} data={data} />;
};

export default DashBoardChart;
