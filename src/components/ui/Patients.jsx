export default function Patients() {
  const patients = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="w-1/4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[24px]">Patients</h1>
        <div className="bg-gray-200 h-5 w-5"></div>
      </div>
      <div className="">
        {patients.map((patient, index) => (
          <div key={index} className="w-full h-14 mb-3 bg-gray-200"></div>
        ))}
      </div>
    </div>
  );
}
