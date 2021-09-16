function LifetimeStats({ title, value }) {
  return (
    <div className="flex flex-col items-center bg-gunpowder h-14 lg:h-16 w-28 md:w-24 lg:w-36 rounded-sm p-2 border-t-8 border-peakypink ">
      <p className="text-sm font-semibold text-white lg:text-lg lg:font-bold">
        {value}
      </p>
      <p className="whitespace-nowrap text-gray-500 font-semibold text-[11px] lg:text-[12px]">
        {title}
      </p>
    </div>
  );
}

export default LifetimeStats;
