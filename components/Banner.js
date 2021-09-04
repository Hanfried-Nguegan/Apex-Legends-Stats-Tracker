import React, { useState } from "react";
import Image from "next/image";
import SearchIcon from "@material-ui/icons/Search";
import ApexGif from "../public/images/apex_logo_gif.gif";
import XboxLogo from "../public/images/xbox_logo.png";
import OriginLogo from "../public/images/origin_logo.png";
import PsLogo from "../public/images/ps4_logo.png";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Alert from "./Alert";

function Banner() {
  const [platform, setPlatform] = useState("psn");
  const [platformUserIdentifier, setPlatformUserIdentifier] = useState("");
  const [userProfile, setUserProfile] = useState();
  const router = useRouter();

  // console.log(platform)
  // console.log(platformUserIdentifier)

  const getUserProfile = async (e) => {
    // Capture data for platform and platformUserId
    const data = await axios.post("/api/apex/", {
      platform,
      platformUserIdentifier,
    });
    const profile = JSON.parse(JSON.stringify(data.data));
    // You have the user profile
    console.log(profile);
    setUserProfile(profile);

    if (userProfile) {
      router.push({
        pathname: "/search",
        query: {
          userName: platformUserIdentifier,
          platform: platform,
        },
      });
    }
  };

  return (
    <div className="bg-cover h-screen bg-worlds-edge">
      <div className="flex flex-col lg:flex-row lg:pt-16 lg:pr-16 lg:pb-32 lg:pl-16 items-center h-screen justify-center pt-1 pr-1 pb-8 pl-1">
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
            <div className="flex justify-between p-2  m-2 h-16 bg-gray-900 rounded-md bg-opacity-50">
              <div
                className="flex flex-grow justify-center cursor-pointer "
                onClick={(e) => setPlatform("origin")}
              >
                <Image
                  src={OriginLogo}
                  objectFit="contain"
                  height={30}
                  width={30}
                />
              </div>
              <div
                className="flex flex-grow justify-center cursor-pointer"
                onClick={(e) => setPlatform("xbl")}
              >
                <Image
                  src={XboxLogo}
                  objectFit="contain"
                  height={30}
                  width={30}
                />
              </div>
              {/* What is this ?? */}
              <div
                className="flex flex-grow justify-center cursor-pointer"
                onClick={(e) => setPlatform("psn")}
              >
                <Image
                  src={PsLogo}
                  objectFit="contain"
                  height={30}
                  width={30}
                />
              </div>
            </div>
            <div className="flex relative items-center">
              <input
                value={platformUserIdentifier}
                onChange={(e) => setPlatformUserIdentifier(e.target.value)}
                type="text"
                placeholder={
                  (platform == "psn" && "Enter PlayStation User Name") ||
                  (platform == "xbl" && "Enter XBox Live User Name") ||
                  (platform == "origin" && "Enter Origin User Name")
                }
                className="flex flex-1 m-2 p-2 h-16 rounded-md outline-none"
              />
              <SearchIcon
                className=" absolute right-0 mr-4 cursor-pointer"
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
