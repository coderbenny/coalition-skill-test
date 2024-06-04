import { useContext, useState } from "react";
import DiagnosticList from "./DiagnosticList";
import Insight from "./Insight";
import { CurrentPatientContext } from "../context/CurrentPatientContext";
import { Chart } from "chart.js";
import { LineGraph } from "./Line";

export default function Diagnosis() {
  const { patient } = useContext(CurrentPatientContext);
  const dgs = patient ? patient.diagnosis_history[0] : [];
  // console.log(values[0]["month"]);

  // const monthLabels = patient
  //   ? patient.diagnosis_history.map((d) => d.month)
  //   : [];
  // const diagnosis = patient
  //   ? patient.diagnosis_history.map((d) => d.blood_pressure)
  //   : [];
  // console.log(diagnosis);

  // const someData = {
  //   labels: monthLabels,
  //   datasets: [diagnosis],
  // };
  // console.log(someData);

  const labels = [];
  const diastolicData = [];
  const systolicData = [];

  // Iterate over patient diagnosis history to extract data
  patient?.diagnosis_history.forEach((d) => {
    labels.push(d.month); // Extract month and add to labels array
    diastolicData.push(d.blood_pressure.diastolic); // Extract diastolic data and add to diastolicData array
    systolicData.push(d.blood_pressure.systolic); // Extract systolic data and add to systolicData array
  });

  console.log(labels);
  console.log(diastolicData);
  console.log(systolicData);

  const someData = {
    labels: labels,
    datasets: [diastolicData, systolicData],
  };

  return (
    <div className="w-1/2 h-full">
      <h2 className="text-[24px] font-bold">Diagnosis History</h2>
      <div className="">
        <LineGraph />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
          <Insight
            title="Respiratory Rate"
            metrics={patient ? dgs.respiratory_rate.value : "Loading..."}
            comment={patient ? dgs.respiratory_rate.levels : "Loading..."}
            icon="/respiratory_rate.png"
            bgColor="#E0F3FA"
          />
          <Insight
            title="Temperature'"
            metrics={patient ? dgs.temperature.value : "Loading..."}
            comment={patient ? dgs.temperature.levels : "Loading..."}
            icon="/temperature.png"
            bgColor="#FFE6E9"
          />
          <Insight
            title="Heart Rate"
            metrics={patient ? dgs.heart_rate.value : "Loading..."}
            comment={patient ? dgs.heart_rate.levels : "Loading..."}
            icon="/HeartBPM.png"
            bgColor="#FFE6F1"
          />
        </div>
        <DiagnosticList />
      </div>
    </div>
  );
}
