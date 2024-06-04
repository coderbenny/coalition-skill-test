export default function Insight({ icon, title, metrics, comment, bgColor }) {
  return (
    <div
      className={`h-[200px] p-3 w-full rounded-md`}
      style={bgColor ? { backgroundColor: bgColor } : {}}
    >
      <img src={icon} alt="diagnostics" className="h-20 w-20 mb-2" />
      <h4 className="font-bold text-gray-600">{title}</h4>
      <p className="font-bold text-xl mb-3">{metrics}</p>
      <p className="font-semibold text-sm tracking-wide">{comment}</p>
    </div>
  );
}
