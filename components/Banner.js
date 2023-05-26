import React, { useState } from "react";
import Image from "next/image";
import SearchIcon from "@material-ui/icons/Search";
import ApexGif from "../public/images/apex_logo_gif.gif";
import XboxLogo from "../public/images/xbox_logo.png";
import OriginLogo from "../public/images/origin_logo.png";
import PsLogo from "../public/images/ps4_logo.png";
import { useRouter } from "next/router";

function Banner() {
  const router = useRouter();
  const [platform, setPlatform] = useState("psn");
  const [platformUserIdentifier, setPlatformUserIdentifier] = useState("");

  const getUserProfile = async () => {
    if (platform === "psn") {
      router.push(`/player/playstation/${platformUserIdentifier}`);
    }
    if (platform === "xbl") {
      router.push(`/player/xbox/${platformUserIdentifier}`);
    }
    if (platform === "origin") {
      router.push(`/player/origin/${platformUserIdentifier}`);
    }
  };

  return (
    <div className="bg-cover h-screen bg-worlds-edge">
      <div className="flex flex-col lg:flex-row lg:pt-16 lg:pr-16 lg:pb-32 lg:pl-16 items-center justify-center h-screen pt-1 pr-1 pb-8 pl-1">
        <div className="flex flex-col w-full md:w-11/12 justify-between items-center ">
          <div className="flex items-center space-x-3 mt-1 mb-2 ml-0 mr-0">
            <div className="mr-1">
              <Image src={ApexGif} objectFit="contain" width={80} height={80} />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">
                APEX LEGENDS STATS
              </p>
              <p className=" text-base font-semibold text-white">
                Check Detailed Apex Legends Stats And Leaderboard
              </p>
            </div>
          </div>
          <div className="flex mb-2 w-full lg:w-3/5 md:w-4/5 flex-col ">
            <div className="flex justify-between m-2 h-16 bg-gray-900  rounded-md bg-opacity-50">
              <div className="icons" onClick={(e) => setPlatform("origin")}>
                <Image
                  src={OriginLogo}
                  objectFit="contain"
                  height={30}
                  width={30}
                />
              </div>
              <div className="icons" onClick={(e) => setPlatform("xbl")}>
                <Image
                  src={XboxLogo}
                  objectFit="contain"
                  height={30}
                  width={30}
                />
              </div>
              <div className="icons" onClick={(e) => setPlatform("psn")}>
                <Image
                  src={PsLogo}
                  objectFit="contain"
                  height={30}
                  width={30}
                />
              </div>
            </div>
            <div className="relative flex items-center">
              <input
                value={platformUserIdentifier}
                onChange={(e) => setPlatformUserIdentifier(e.target.value)}
                type="text"
                placeholder={
                  (platform == "psn" &&
                    "Enter a Playstation Username eg 'Daltoosh'") ||
                  (platform == "xbl" &&
                    "Enter an XBox Live Username eg 'Nesposito ") ||
                  (platform == "origin" &&
                    "Enter an Origin Username 'FreiAndre' ")
                }
                className="flex flex-1 m-2 p-2 h-16 rounded-md outline-none"
              />
              <SearchIcon
                className="absolute right-0 mr-5"
                onClick={getUserProfile}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
