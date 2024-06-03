export default function Insight() {
  return (
    <div className="h-[200px] p-3 w-full bg-gray-300 rounded-md">
      <img
        src="/respiratory_rate.png"
        alt="diagnostics"
        className="h-20 w-20 mb-2"
      />
      <h4 className="font-bold text-gray-600">Respiratory Rate</h4>
      <p className="font-bold text-xl mb-3">20bpm</p>
      <p className="font-bold text-sm tracking-wide">Normal</p>
    </div>
  );
}
