import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import { lineChartData } from "../fakeData";
import { useContext } from "react";
import { CurrentPatientContext } from "../context/CurrentPatientContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineGraph = () => {
  const { patient } = useContext(CurrentPatientContext);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Blood Pressure",
      },
    },
  };

  const labels = [];
  const diastolicData = [];
  const systolicData = [];

  patient?.diagnosis_history.slice(5, 13).forEach((d) => {
    labels.push(d.month);
    diastolicData.push(d.blood_pressure.diastolic.value);
    systolicData.push(d.blood_pressure.systolic.value);
  });

  console.log(labels);
  console.log(diastolicData);
  console.log(systolicData);

  const someData = {
    labels: labels,
    datasets: [
      {
        label: "systolic",
        data: systolicData,
        borderColor: "#E66FD2",
      },
      {
        label: "diastolic",
        data: diastolicData,
        borderColor: "#8C6FE6",
      },
    ],
  };

  return <Line options={options} data={someData} />;
};
