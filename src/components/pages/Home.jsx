import { useContext, useEffect, useState } from "react";
import Patients from "../ui/Patients";
import Diagnosis from "../ui/Diagnosis";
import PatientDetails from "../ui/PatientDetails";
import { PatientsContext } from "../context/PatientContext";

export default function Home() {
  const { patients, setPatients } = useContext(PatientsContext);
  const [selectedPatient, setSelectedPatient] = useState("");
  const username = "coalition";
  const password = "skills-test";
  const credentials = btoa(`${username}:${password}`);

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Basic ${credentials}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      setPatients(result);
    })
    .catch((error) => console.log("error", error));

  console.log(patients);
  console.log(selectedPatient);

  return (
    <div className="flex items-center p-3 gap-2">
      <Patients />
      <Diagnosis />
      <PatientDetails />
    </div>
  );
}
