import DiagnosticList from "./DiagnosticList";
import Insight from "./Insight";

export default function Diagnosis() {
  return (
    <div className="w-1/2 h-full">
      <h2 className="text-[24px] font-bold">Diagnosis History</h2>
      <div className="">
        <div className="bg-gray-200 h-[298px] w-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
          <Insight
            title="Respiratory Rate"
            metrics="20bpm"
            comment="Normal"
            icon="/respiratory_rate.png"
          />
          <Insight
            title="Temperature'"
            metrics="98.6F"
            comment="Normal"
            icon="/temperature.png"
          />
          <Insight
            title="Heart Rate"
            metrics="78bpm"
            comment="Lower than average"
            icon="/HeartBPM.png"
          />
        </div>
        <DiagnosticList />
      </div>
    </div>
  );
}
