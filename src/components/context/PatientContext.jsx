import { createContext, useState } from "react";

export const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  const values = { patients, setPatients };

  return (
    <PatientsContext.Provider value={values}>
      {children}
    </PatientsContext.Provider>
  );
};
