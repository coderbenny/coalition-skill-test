import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PatientsProvider } from "./components/context/PatientContext.jsx";
import { CurrentPatientProvider } from "./components/context/CurrentPatientContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PatientsProvider>
      <CurrentPatientProvider>
        <App />
      </CurrentPatientProvider>
    </PatientsProvider>
  </React.StrictMode>
);
