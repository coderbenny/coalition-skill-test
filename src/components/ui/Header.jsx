export default function Header() {
  return (
    <div className="flex justify-between items-center p-1 px-2">
      <img src="/TestLogo.png" alt="logo" className="h-[48px] w-[200px]" />
      <div className="flex text-[14px] gap-3">
        <p className="flex items-center font-semibold">
          <img
            src="/home_FILL0_wght300_GRAD0_opsz24.png"
            alt="home"
            className="h-3 w-3 mr-1"
          />
          Overview
        </p>
        <p className="flex items-center font-semibold bg-teal-300 p-2 rounded-3xl px-3">
          <img
            src="/group_FILL0_wght300_GRAD0_opsz24.png"
            alt="patients"
            className="h-3 w-3 mr-1"
          />
          Patients
        </p>
        <p className="flex items-center font-semibold">
          <img
            src="/calendar_today_FILL0_wght300_GRAD0_opsz24.png"
            alt="schedule"
            className="h-4 w-4 mr-1"
          />
          Schedule
        </p>
        <p className="flex items-center font-semibold">
          <img
            src="/chat_bubble_FILL0_wght300_GRAD0_opsz24.png"
            alt="message"
            className="h-4 w-4 mr-1"
          />
          Message
        </p>
        <p className="flex items-center font-semibold">
          <img
            src="/credit_card_FILL0_wght300_GRAD0_opsz24.png"
            alt="home"
            className="h-4 w-4 mr-1"
          />
          Transactions
        </p>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
          alt="pic"
          className="h-9 rounded-full"
        />
        <div className="flex flex-col mr-6">
          <p className="text-sm font-semibold">Dr. Jose Simmons</p>
          <p className="text-sm">General Practitioner</p>
        </div>
        <img
          src="/settings_FILL0_wght300_GRAD0_opsz24.png"
          alt="settings"
          className="h-5 mr-2"
        />
        <img
          src="/more_vert_FILL0_wght300_GRAD0_opsz24.png"
          alt="settings"
          className="h-5"
        />
      </div>
    </div>
  );
}
