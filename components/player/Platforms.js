import Image from "next/image";

function Platforms({ img, title, active }) {
  return (
    <div
      className={`flex flex-col w-14 h-14 lg:w-16 lg:h-16 items-center space-y-1 bg-gunpowder ${
        active && " bg-gradient-to-r from-purplehaze to-peakypink"
      } p-2 rounded-sm`}
    >
      <Image src={img} objectFit="contain" />
      <p className=" text-gray-300 text-[10px] lg:text-[12px]">{title}</p>
    </div>
  );
}

export default Platforms;
