import Platforms from "./Platforms";
import PsLogo from "@/components/player/images/ps4_logo.png";
import XboxLogo from "@/components/player/images/xbox_logo.png";
import OriginLogo from "@/components/player/images/origin_logo.png";
import LifetimeStats from "./LifetimeStats";

function PlayerPlatform({ player }) {
  return (
    <div className="flex items-center justify-between ml-2 mb-3 mr-2 p-2 lg:px-5">
      <div className="flex flex-col">
        <div>
          <p className="text-base text-white font-semibold mb-2">Platforms</p>
        </div>
        <div className="flex space-x-2">
          {player.platformInfo.platformSlug == "psn" && (
            <div>
              <Platforms title={"Playstation"} img={PsLogo} active />{" "}
            </div>
          )}
          {player.platformInfo.platformSlug == "origin" && (
            <div>
              <Platforms title={"PC"} img={OriginLogo} active />
            </div>
          )}
          {player.platformInfo.platformSlug == "xbl" && (
            <div>
              <Platforms title={"Xbox"} img={XboxLogo} active />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <p className="text-base text-white font-semibold mb-2">
            Lifetime Stats
          </p>
        </div>
        <div className="flex space-x-2">
          <div className="hidden md:inline-flex">
            <LifetimeStats
              title={"Level"}
              value={player.segments[0].stats.level?.displayValue}
            />
          </div>
          <div>
            <LifetimeStats
              value={player.segments[0].stats.kills?.displayValue}
              title={"Kills"}
            />
          </div>
          <div>
            <LifetimeStats
              title={"Total Damage"}
              value={player.segments[0].stats.damage?.displayValue}
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="text-base text-white font-semibold mb-2">Overview</p>
        </div>
        <div className="flex space-x-2">
          <div className="hidden md:inline-flex">
            <LifetimeStats
              title={"Total Finishers"}
              value={player.segments[0].stats.finishers?.displayValue}
            />
          </div>
          <div>
            <LifetimeStats
              value={player.segments[0].stats.headshots?.displayValue}
              title={"Total Headshots"}
            />
          </div>
          <div className="hidden md:inline-flex">
            <LifetimeStats
              title={"Rank Score"}
              value={player.segments[0].stats.rankScore?.displayValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerPlatform;
