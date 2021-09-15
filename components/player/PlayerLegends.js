import React, { useState } from "react";
import Image from "next/image";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function PlayerLegends({
  legendImg,
  legendName,
  wins,
  kills,
  damage,
  headshots,
  killLeader,
  sniperKills,
}) {
  const [dropDown, setDropDown] = useState(true);
  const dropDownHandler = () => {
    dropDown ? setDropDown(false) : setDropDown(true);
  };

  return (
    <div className="flex flex-col ml-0 mr-0 mb-3 px-4">
      <div className="flex items-center relative bg-gunpowder ml-2 mr-2 ">
        <Image src={legendImg} height={70} width={70} className="ml-3" />
        <p className="font-bold text-lg text-gray-300">{legendName}</p>
        <div
          onClick={() => dropDownHandler()}
          className="flex items-center absolute right-6 "
        >
          {dropDown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </div>
      </div>
      {!dropDown && (
        <div className="grid grid-cols-3 gap-2 lg:grid-cols-4 relative ml-2 mr-2  p-2 bg-gunpowder">
          <div className="flex flex-col p-1 w-full">
            <p className="text-gray-500 text-[12px] font-semibold">Kills</p>
            <p className="text-white text-base font-semibold">{kills}</p>
            <div className="bg-gradient-to-r from-purplehaze to-peakypink h-[1px] w-16" />
          </div>
          <div className="flex flex-col p-1 w-full">
            <p className="text-gray-500 text-[12px] font-semibold">Damage</p>
            <p className="text-white text-base font-semibold">{damage}</p>
            <div className="bg-gradient-to-r from-purplehaze to-peakypink h-[1px] w-16" />
          </div>
          <div className="flex flex-col p-1 w-full">
            <p className="text-gray-500 text-[12px] font-semibold">Headshots</p>
            <p className="text-white text-base font-semibold">{headshots}</p>
            <div className="bg-gradient-to-r from-purplehaze to-peakypink h-[1px] w-16" />
          </div>
          <div className="flex flex-col p-1 w-full">
            <p className="text-gray-500 text-[12px] font-semibold">
              Winning Kills
            </p>
            <p className="text-white text-base font-semibold">{wins}</p>
            <div className="bg-gradient-to-r from-purplehaze to-peakypink h-[1px] w-16" />
          </div>
          <div className="flex flex-col p-1 w-full">
            <p className="text-gray-500 text-[12px] font-semibold">
              Kills as Kill Leader
            </p>
            <p className="text-white text-base font-semibold">{killLeader}</p>
            <div className="bg-gradient-to-r from-purplehaze to-peakypink h-[1px] w-16" />
          </div>
          <div className="flex flex-col p-1 w-full">
            <p className="text-gray-500 text-[12px] font-semibold">
              Sniper Kills
            </p>
            <p className="text-white text-base font-semibold">{sniperKills}</p>
            <div className="bg-gradient-to-r from-purplehaze to-peakypink h-[1px] w-16" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayerLegends;
