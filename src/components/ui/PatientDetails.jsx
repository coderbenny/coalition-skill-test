import { useContext } from "react";
import PatientField from "./PatientField";
import { CurrentPatientContext } from "../context/CurrentPatientContext";
import LabResults from "./LabResuts";

export default function PatientDetails() {
  const { patient } = useContext(CurrentPatientContext);
  // console.log(patient);

  return (
    <div className="w-1/4 h-full">
      {patient ? (
        <div className="flex flex-col justify-center">
          <img
            src={patient.profile_picture}
            alt="profile"
            className="bg-gray-200 h-40 w-40 rounded-full mb-3 mx-auto"
          />
          <h2 className="font-bold text-[24px] text-center mb-2">
            {patient.name}
          </h2>
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          <div className="bg-gray-100 h-40 w-40 rounded-full mb-3 mx-auto"></div>
          <h2 className="font-bold text-[24px] text-center mb-2">Loading...</h2>
        </div>
      )}

      <PatientField
        icon="/BirthIcon.png"
        name="Date of Birth"
        contents={patient ? patient.date_of_birth : "Loading"}
      />
      <PatientField
        icon="/FemaleIcon.png"
        name="Gender"
        contents={patient ? patient.gender : "Loading"}
      />
      <PatientField
        icon="/PhoneIcon.png"
        name="Contact Info"
        contents={patient ? patient.phone_number : "Loading"}
      />
      <PatientField
        icon="/PhoneIcon.png"
        name="Emergency Contacts"
        contents={patient ? patient.emergency_contact : "Loading"}
      />
      <PatientField
        icon="/InsuranceIcon.png"
        name="Insurance Provider"
        contents={patient ? patient.insurance_type : "Loading"}
      />
      <button
        type="button"
        className="rounded-3xl px-3 bg-teal-300 p-2 ml-10 mt-5 mb-5"
      >
        Show All Information
      </button>

      <LabResults />
    </div>
  );
}
