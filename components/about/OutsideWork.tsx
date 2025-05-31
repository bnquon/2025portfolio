import { DATA } from "../../data/data";
import Image from "next/image";

export default function OutsideOfWork() {
  return (
    <div className="sm:grid sm:grid-cols-[1fr_1fr] flex flex-col gap-4 sm:gap-0">
      <p className="2xl:text-2xl sm:text-xl text-lg">(Outside of Work)</p>
      <div className="flex sm:gap-9">
        {DATA.outsideOfWork.map((item) => (
          <div key={item.imageUrl} className="relative w-1/3 2xl:h-[350px] sm:h-[250px] h-[150px]">
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