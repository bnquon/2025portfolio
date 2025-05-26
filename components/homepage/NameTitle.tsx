import Image from "next/image";
import placeHolderImage from "../../public/placeholder.jpg";

export default function NameTitle() {
  return (
    <div className="grid w-full grid-cols-[auto_1fr_auto] items-center">
      <span className="text-[256px] font-bold">BRANDON</span>
      <div className="relative w-full h-[181px] bg-blue-200 mt-[0px]">
        <Image
          layout="fill"
          objectFit="cover"
          src={placeHolderImage}
          alt="Your Image"
        />
      </div>
      <span className="text-[256px] font-bold">QUON</span>
    </div>
  );
}
