function PlayerStats({ kills, damage, headshots, wins }) {
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 relative ml-2 mr-2  p-2 bg-gunpowder">
      <div className="flex flex-col p-1 w-full">
        <p className="text-gray-500 text-[12px] font-semibold">Kills</p>
        <p className="text-white text-base font-semibold">{kills}</p>
        <div className="bg-gradient-to-r from-purplehaze to-peakypink h-[1px] w-16" />
        <p className="text-white text-[12px]">85%</p>
      </div>
      <div className="flex flex-col p-1 w-full">
        <p className="text-gray-500 text-[12px] font-semibold">Damage</p>
        <p className="text-white text-base font-semibold">{damage}</p>
        <div className="bg-gradient-to-r from-purplehaze to-peakypink h-[1px] w-16" />
        <p className="text-white text-[12px]">85%</p>
      </div>
      <div className="flex flex-col p-1 w-full">
        <p className="text-gray-500 text-[12px] font-semibold">Headshots</p>
        <p className="text-white text-base font-semibold">{headshots}</p>
        <div className="bg-gradient-to-r from-purplehaze to-peakypink h-[1px] w-16" />
        <p className="text-white text-[12px]">85%</p>
      </div>
      <div className="flex flex-col p-1 w-full">
        <p className="text-gray-500 text-[12px] font-semibold">Wins</p>
        <p className="text-white text-base font-semibold">65679656</p>
        <div className="bg-gradient-to-r from-purplehaze to-peakypink h-[1px] w-16" />
        <p className="text-white text-[12px]">85%</p>
      </div>
    </div>
  );
}

export default PlayerStats;
