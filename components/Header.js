import Image from "next/image";
import ApexLogo from "../public/images/apex_logo.png";
import PsLogo from "../public/images/ps4_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { Avatar } from "@material-ui/core";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Header() {
  return (
    <header className="flex flex-col sticky top-0 z-50">
      <div className="flex items-center justify-between bg-sharptuna md:px-10 ">
        <div className="flex items-center p-1 ml-3 cursor-pointer">
          <Image src={ApexLogo} objectFit="contain" width={40} height={40} />
          <span className="hidden md:inline md:text-sm lg:text-base text-gray-400 text-sm font-bold mr-2">
            Apex Legends
          </span>
        </div>
        <div className="hidden lg:inline-flex space-x-8 pl-15 pr-5 text-gray-400 text-base ">
          <p className="cursor-pointer hover:bg-red-700 rounded-md p-1">Home</p>
          <p className="cursor-pointer hover:bg-red-700 rounded-md p-1">
            Leaderboard
          </p>
          <p className="cursor-pointer hover:bg-red-700 rounded-md p-1">
            Insights
          </p>
        </div>
        <div className="flex items-center text-gray-400 font-semibold bg-gray-600 rounded-sm p-1 cursor-pointer hover:shadow-xl active:scale-90 duration-150">
          <SearchIcon />
          <p className="hidden md:inline">Search Profile</p>
        </div>
        <div className="mr-4 ml-2">
          <Avatar
            src="https://lh3.googleusercontent.com/ogw/ADea4I6L0EpcOuErer50so7bds-GQB2wEsNH6WQ1_ZBNMw=s32-c-mo"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center lg:hidden justify-between bg-sharptuna fixed bottom-0 space-x-2 inset-x-0 p-2 ">
        <div className="flex flex-col items-center justify-center text-gray-400 flex-1 cursor-pointer hover:text-red-700 ">
          <HomeIcon />
          <p className="text-xs">Home</p>
        </div>
        <div className="flex flex-col items-center  text-gray-400 flex-1 cursor-pointer hover:text-red-700 ">
          <EmojiEventsIcon />
          <p className="text-xs">Leaderboard</p>
        </div>
        <div className="flex flex-col items-center text-gray-400 flex-1 cursor-pointer hover:text-red-700">
          <Image src={PsLogo} objectFit="contain" width={40} height={40} />
          <p className="text-xs">youaintgangggang</p>
        </div>
        <div className="flex flex-col items-center text-gray-400 flex-1 cursor-pointer hover:text-red-700 ">
          <EqualizerIcon />
          <p className="text-xs">Insights</p>
        </div>
        <div className="flex flex-col items-center text-gray-400 flex-1 cursor-pointer hover:text-red-700 ">
          <MoreHorizIcon />
          <p className="text-xs">More</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
