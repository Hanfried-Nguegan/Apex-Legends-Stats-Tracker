import { Avatar } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

function PlayerBanner({ img, avatarImg, views, playerName }) {
  return (
    <div
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      className="h-auto"
    >
      <div className="flex items-center ">
        <div className="ml-5 mr-5 mt-8 mb-6 md:mt-44 lg:mt-72 ">
          <Avatar
            src={avatarImg}
            style={{
              height: "9rem",
              width: "9rem",
              borderStyle: "solid",
              borderWidth: "5px",
              borderColor: "white",
            }}
          />
        </div>
        <div className="flex flex-col md:mt-40 lg:mt-64">
          <div className="flex">
            <VisibilityIcon className="text-white mr-2 lg:text-lg" />
            <p className="text-white whitespace-nowrap">
              {views} <span className="font-bold">views</span>
            </p>
          </div>
          <div>
            <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold ml-2">
              {playerName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerBanner;
