import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PatientsProvider } from "./components/context/PatientContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PatientsProvider>
      <App />
    </PatientsProvider>
  </React.StrictMode>
);
