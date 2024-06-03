import PatientField from "./PatientField";

export default function PatientDetails() {
  return (
    <div className="w-1/4 h-full">
      <div className="flex flex-col justify-center">
        <div className="bg-gray-200 h-40 w-40 rounded-full mb-3 mx-auto"></div>
        <h2 className="font-bold text-[24px] text-center mb-2">
          Jessica Taylor
        </h2>
      </div>
      <PatientField
        icon="/BirthIcon.png"
        name="Date of Birth"
        contents="August 24, 1996"
      />
      <PatientField icon="/FemaleIcon.png" name="Gender" contents="Female" />
      <PatientField
        icon="/PhoneIcon.png"
        name="Contact Info"
        contents="(415) 5555-1234"
      />
      <PatientField
        icon="/PhoneIcon.png"
        name="Emergency Contacts"
        contents="(415) 5555-1234"
      />
      <PatientField
        icon="/InsuranceIcon.png"
        name="Insurance Provider"
        contents="Sunrise Health Insurance"
      />
      <button
        type="button"
        className="rounded-3xl px-3 bg-teal-200 p-2 ml-10 mt-5"
      >
        Show All Information
      </button>
    </div>
  );
}
