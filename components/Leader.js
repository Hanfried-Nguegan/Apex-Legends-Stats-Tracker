import { Avatar } from "@material-ui/core";
import Image from "next/image";
import PsLogo from "../public/images/ps4_logo.png";

function Leader({ name, img, kills, damage, wins }) {
  return (
    <div className="flex items-center p-3 lg:p-5 flex-1 m-1.5 bg-gradient-to-r from-madtrouble to-sweetmayhem w-full rounded-xl hover:scale-105 transition-transform duration-200 ease-out">
      <div className="p-2">
        <Avatar src={img} />
      </div>
      <div className="flex flex-col flex-grow justify-center">
        <div className="flex items-center space-x-1 lg:space-x-2 ml-2">
          <Image src={PsLogo} objectFit="contain" width={20} height={20} />
          <p className="text-white font-bold">{name}</p>
        </div>
        <div>
          <p className="text-gray-400 font-semibold ml-2 cursor-pointer">
            View Player Profile
          </p>
        </div>
      </div>
      <div className="flex flex-col space-x-1 lg:space-x-2 flex-grow items-center ml-2">
        <div className="text-gray-300 font-semibold text-base ">
          {(kills && <p>Most Kills</p>) ||
            (damage && <p>Highest Damage</p>) ||
            (wins && <p>Most Wins</p>)}
        </div>
        <div className="text-white text-xl font-semibold">
          {(kills && <p>{kills}</p>) ||
            (damage && <p>{damage}</p>) ||
            (wins && <p>{wins}</p>)}
        </div>
      </div>
    </div>
  );
}

export default Leader;
