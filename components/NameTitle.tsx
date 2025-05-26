import Image from "next/image";
import placeHolderImage from "../public/placeholder.jpg";

export default function NameTitle() {
  return (
    <div className="grid w-full grid-cols-[auto_1fr_auto] items-center mt-[-32px]">
      <span className="text-[280px] font-bold">Brandon</span>
      <div className="relative w-full h-[236px] bg-blue-200">
        <Image
          layout="fill"
          objectFit="cover"
          src={placeHolderImage}
          alt="Your Image"
        />
      </div>
      <span className="text-[280px] font-bold">Quon</span>
    </div>
  );
}
