export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <p className="">Logo</p>
      <div className="flex justif-between gap-3">
        <p className="">Overview</p>
        <p className="">Patients</p>
        <p className="">Schedule</p>
        <p className="">Message</p>
        <p className="">Transactions</p>
      </div>
      <div className="flex items-center">
        <img src="" alt="pic" className="h-10 w-10 rounded-full" />
        <div className="flex flex-col">
          <p className="">Dr. Jose Simmons</p>
          <p className="">General Practitioner</p>
        </div>
      </div>
    </div>
  );
}
