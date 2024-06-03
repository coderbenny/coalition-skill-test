export default function PatientField() {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="bg-gray-200 h-7 w-7 rounded-md"></div>
      <div className="flex flex-col">
        <h4 className="font-semibold uppercase text-md">Date of Birth</h4>
        <p className="text-sm">August, 23 1996</p>
      </div>
    </div>
  );
}
