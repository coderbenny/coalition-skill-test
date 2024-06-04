import Result from "./Result";

export default function LabResults() {
  return (
    <div className="p-3">
      <h2 className="font-bold mb-2 text-[24px]">Lab Results</h2>
      <Result name="Blood Test" />
      <Result name="CT Scans" />
      <Result name="Radiology Reports" />
      <Result name="X Rays" />
      <Result name="Urine Test" />
    </div>
  );
}
