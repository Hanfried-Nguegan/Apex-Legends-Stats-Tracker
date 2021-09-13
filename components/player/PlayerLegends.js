import Image from "next/image";

function PlayerLegends({ legendImg, legendName }) {
  return (
    <div className="ml-0 mr-0 mb-3 px-4 ">
      <div className="flex items-center relative bg-gunpowder ml-2 mr-2">
        <img src={legendImg} height={80} width={80} className="ml-3" />
        <p className="font-bold text-lg text-gray-300">{legendName}</p>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default PlayerLegends;
