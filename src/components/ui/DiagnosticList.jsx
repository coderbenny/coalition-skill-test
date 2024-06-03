export default function DiagnosticList() {
  return (
    <div className="mt-5">
      <h2 className="text-[24px] mb-3 font-bold">Diagnostic List</h2>
      <table className="w-full text-left px-2">
        <thead className="bg-gray-200">
          <th className="p-2">Problem/Diagnostics</th>
          <th className="p-2">Description</th>
          <th className="p-2">Status</th>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Problem 1</td>
            <td className="p-2">Another problem</td>
            <td className="p-2">Inactive</td>
          </tr>
          <tr>
            <td className="p-2">Problem 2</td>
            <td className="p-2">Problem number 2</td>
            <td className="p-2">Under Observation</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
