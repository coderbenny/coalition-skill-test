export default function Result({ name }) {
  return (
    <div className="flex items-center justify-between w-full p-2 h-[30px]">
      <p className="">{name}</p>
      <img
        src="/download_FILL0_wght300_GRAD0_opsz24 (1).png"
        alt="download"
        className="h-3 w-3"
      />
    </div>
  );
}
