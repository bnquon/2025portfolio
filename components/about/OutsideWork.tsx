import { DATA } from "../../data/data";
import Image from "next/image";

export default function OutsideOfWork() {
  return (
    <div className="grid grid-cols-[1fr_1fr]">
      <p className="text-2xl">(Outside of Work)</p>
      <div className="flex gap-9">
        {DATA.outsideOfWork.map((item) => (
          <div key={item.imageUrl} className="relative w-1/3 h-[350px]">
            <Image
              layout="fill"
              objectFit="cover"
              src={item.imageUrl}
              alt="Your Image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}