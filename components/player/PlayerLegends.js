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
      <div className="flex items-center relative bg-gunpowder ml-2 mr-2 rounded-sm ">
        <Image src={legendImg} height={70} width={70} className="ml-3" />
        <p className="font-bold text-lg text-gray-300">{legendName}</p>
        <div
          onClick={() => dropDownHandler()}
          className="flex items-center absolute right-6 text-white "
        >
          {dropDown ? (
            <ArrowDropDownIcon />
          ) : (
            <ArrowDropUpIcon className="text-purplehaze" />
          )}
        </div>
      </div>
      {!dropDown && (
        <div className="grid grid-cols-3 gap-2 lg:grid-cols-4 relative ml-2 mr-2 mt-[1px]  p-2 bg-gunpowder">
          <div className="container">
            <p className="kills">Kills</p>
            <p className="value">{kills}</p>
            <div className="color" />
          </div>
          <div className="container">
            <p className="kills">Damage</p>
            <p className="value">{damage}</p>
            <div className="color" />
          </div>
          <div className="container">
            <p className="kills">Headshots</p>
            <p className="value">{headshots}</p>
            <div className="color" />
          </div>
          <div className="container">
            <p className="kills">Winning Kills</p>
            <p className="value">{wins}</p>
            <div className="color" />
          </div>
          <div className="container">
            <p className="kills">Kills as Kill Leader</p>
            <p className="value">{killLeader}</p>
            <div className="color" />
          </div>
          <div className="container">
            <p className="kills">Sniper Kills</p>
            <p className="value">{sniperKills}</p>
            <div className="color" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayerLegends;
