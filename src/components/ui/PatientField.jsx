export default function PatientField({ icon, name, contents }) {
  return (
    <div className="flex items-center gap-4 mb-3">
      <img src={icon} alt="patient icon" className="h-7 w-7" />
      <div className="flex flex-col">
        <h4 className="font-bold uppercase text-gray-400 text-md">{name}</h4>
        <p className="text-sm">{contents}</p>
      </div>
    </div>
  );
}
