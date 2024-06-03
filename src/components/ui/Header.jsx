export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <img src="/TestLogo.svg" alt="profile" className="" />
      <div className="flex text-[14px] gap-3">
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
