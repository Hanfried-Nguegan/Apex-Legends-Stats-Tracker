import Image from "next/image";
import ApexLogo from "../public/images/apex_logo.png";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="flex items-center justify-between bg-sharptuna h-12">
      <div className="relative flex items-center p-2 h-10 ml-4 lg:ml-12">
        <Image
          src={ApexLogo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
        <p className="ml-10 text-gray-400 font-bold">Apex Legends</p>
      </div>
      <div className="flex items-center bg-gunpowder mr-10 p-1 rounded-md text-gray-400 active:scale-90 transition duration-150 cursor-pointer ">
        <SearchIcon />
        <p className="hidden md:inline-flex">Search</p>
      </div>
    </div>
  );
}

export default Header;
