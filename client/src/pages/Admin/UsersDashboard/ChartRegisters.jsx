import React, { useMemo, useState } from 'react'
import { mockUsers } from "./mock"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);









const scores = [100, 175, 250, 220, 270, 304, 353, 374, 507, 610, 570, 600];
const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const options = {
  responsive: true,
 
  scales: {
    y: {
      min: 0,
    }
  }
}
export default function LineChart() {
  console.log("soy scoress", scores)
  console.log("soy labels", labels)
  const data = useMemo(function () {
    return {
      datasets: [{
        label: "usuarios registrados",
        data: scores,
        pointRadius:6,
        borderColor: "#a7281a",
        pointBackgroundColor: "#a7281a",
        pointBorderColor: "#fff",

      }],
      labels,
    }
  }, []);

  return <Line data={data} options={options} />

}


