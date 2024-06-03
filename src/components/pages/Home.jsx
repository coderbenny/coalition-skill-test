import Patients from "../ui/Patients";
import Diagnosis from "../ui/Diagnosis";
import PatientDetails from "../ui/PatientDetails";

export default function Home() {
  return (
    <div className="flex items-center p-3">
      <Patients />
      <Diagnosis />
      <PatientDetails />
    </div>
  );
}
