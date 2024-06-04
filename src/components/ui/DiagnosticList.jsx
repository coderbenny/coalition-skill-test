import { useContext, useState } from "react";
import { CurrentPatientContext } from "../context/CurrentPatientContext";

export default function DiagnosticList() {
  const { patient } = useContext(CurrentPatientContext);

  const diagnosticList = patient ? patient.diagnostic_list : [];

  console.log(diagnosticList);

  console.log(patient);

  return (
    <div className="mt-5">
      <h2 className="text-[24px] mb-3 font-bold">Diagnostic List</h2>
      <table className="w-full text-left px-2">
        <tr className="bg-gray-200">
          <th className="p-2">Problem/Diagnostics</th>
          <th className="p-2">Description</th>
          <th className="p-2">Status</th>
        </tr>

        {diagnosticList &&
          diagnosticList.map((dg, index) => (
            <tr key={index}>
              <td className="p-2">{dg.name}</td>
              <td className="p-2">{dg.description}</td>
              <td className="p-2">{dg.status}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}
