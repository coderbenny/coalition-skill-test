export default function Insight({ icon, title, metrics, comment }) {
  return (
    <div className="h-[200px] p-3 w-full bg-gray-300 rounded-md">
      <img src={icon} alt="diagnostics" className="h-20 w-20 mb-2" />
      <h4 className="font-bold text-gray-600">{title}</h4>
      <p className="font-bold text-xl mb-3">{metrics}</p>
      <p className="font-bold text-sm tracking-wide">{comment}</p>
    </div>
  );
}
