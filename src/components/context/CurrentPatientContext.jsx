import { createContext, useState } from "react";

export const CurrentPatientContext = createContext();

export const CurrentPatientProvider = ({ children }) => {
  const [patient, setPatient] = useState(null);

  const values = { patient, setPatient };

  return (
    <CurrentPatientContext.Provider value={values}>
      {children}
    </CurrentPatientContext.Provider>
  );
};
