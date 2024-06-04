import { useContext, useEffect, useState } from "react";
import Patients from "../ui/Patients";
import Diagnosis from "../ui/Diagnosis";
import PatientDetails from "../ui/PatientDetails";
import { PatientsContext } from "../context/PatientContext";
import { CurrentPatientContext } from "../context/CurrentPatientContext";

export default function Home() {
  const { patients, setPatients } = useContext(PatientsContext);
  const { patient, setPatient } = useContext(CurrentPatientContext);
  // const [selectedPatient, setSelectedPatient] = useState(null);

  const username = "coalition";
  const password = "skills-test";
  const credentials = btoa(`${username}:${password}`);

  useEffect(() => {
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
      .then((response) => response.json())
      .then((result) => {
        setPatients(result);
        const jessicaTaylor = result.find(
          (patient) => patient.name.trim() === "Jessica Taylor"
        );
        setPatient(jessicaTaylor);
      })
      .catch((error) => console.log("error", error));
  }, []);

  // console.log(patients);
  // console.log(patient);
  return (
    <div className="flex items-center p-3 gap-2">
      <Patients />
      <Diagnosis />
      <PatientDetails />
    </div>
  );
}
