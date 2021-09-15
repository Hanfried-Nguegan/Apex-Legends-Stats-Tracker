import React, { useState } from "react";
import Image from "next/image";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import PlayerStats from "./PlayerStats";

function PlayerLegends({ legendImg, legendName, player }) {
  const [dropDown, setDropDown] = useState(true);
  const dropDownHandler = () => {
    dropDown ? setDropDown(false) : setDropDown(true);
  };

  return (
    <div className="ml-0 mr-0 mb-3 px-4 ">
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
        <div>
          {player.segments.slice(1, player.segments.length).map((item) => (
            <PlayerStats
              kills={item.stats.kills?.displayValue}
              damage={item.stats.damage?.displayValue}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PlayerLegends;
