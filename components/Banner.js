import Image from "next/image";
import ApexGif from "../public/images/apex_logo_gif.gif";
import XboxLogo from "../public/images/xbox_logo.png";
import OriginLogo from "../public/images/origin_logo.png";
import PsLogo from "../public/images/ps4_logo.png";
import Leader from "./Leader";
import axios from "axios"

function Banner() {

  // const getUserProfile = async () => {
  //   // Capture data for platform and platformUserId
  //   const data = await axios.post("/api/apex/", { platform, platformUserIdentifier })
  //   const profile = JSON.parse(JSON.stringify(data.data))
  //   // You have the user profile
  // }

  return (
    <div className="bg-cover bg-worlds-edge">
      <div className="flex flex-col lg:flex-row lg:pt-16 lg:pr-16 lg:pb-32 lg:pl-16 items-center justify-between pt-1 pr-1 pb-8 pl-1">
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
              <div className="flex flex-grow justify-center cursor-pointer">
                <Image
                  src={OriginLogo}
                  objectFit="contain"
                  height={30}
                  width={30}
                />
              </div>
              <div className="flex flex-grow justify-center cursor-pointer">
                <Image
                  src={XboxLogo}
                  objectFit="contain"
                  height={30}
                  width={30}
                />
              </div>
              <div className="flex flex-grow justify-center cursor-pointer">
                <Image
                  src={PsLogo}
                  objectFit="contain"
                  height={30}
                  width={30}
                />
              </div>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter A Username"
                className="flex flex-1 m-2 p-2 h-16 rounded-md outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col py-5 w-[400px] md:w-[500px] lg:w-[600px] justify-center mt-2 mr-4 ">
          {/* Leader Component */}
          <Leader
            img={
              "https://avatar-cdn.tracker.gg/api/avatar/2/youaintgangggang.png"
            }
            name={"youaintgangggang"}
            kills={"10058777"}
          />
          <Leader
            img={
              "https://imgsvc.trackercdn.com/url/size(64),fit(cover)/https%3A%2F%2Favatar-cdn.tracker.gg%2Fapi%2Favatar%2F2%2Fema.png/image.png"
            }
            name={"noobkiller"}
            damage={"58884022"}
          />
          <Leader
            img={"https://avatars.githubusercontent.com/u/42778495?v=4"}
            name={"hxxdini"}
            wins={"10586"}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
