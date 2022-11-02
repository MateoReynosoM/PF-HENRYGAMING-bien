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
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    }, 
  },
};


const labels = ['Sunday', 'Monday' ,'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'];

// la info tiene q estar ordenada en base a los labels 
// en data se pasa un array 
// pensar como traer la info 

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [3, 5, 6, 7, 8,],
      borderColor: 'red',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 200 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function App() {
    console.log(faker.datatype.number({ min: 0, max: 4 }), "faker")
  return <Line options={options} data={data} />;
}
