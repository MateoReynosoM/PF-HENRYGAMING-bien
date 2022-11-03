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
      text: 'Products',
    }, 
  },
};


const labels = ['January', 'Febrero' ,'March', 'April', 'May', 'June', 'july', 'August', 'September', 'Octuber', 'November', 'December'];

// la info tiene q estar ordenada en base a los labels 
// en data se pasa un array 
// pensar como traer la info 

export const data = {
  labels,
  datasets: [
    {
      label: 'Products Added',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 0 ],
      borderColor: 'red',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',

    },
  ],
};

export function App() {

  return <Line options={options} data={data} />;
}
