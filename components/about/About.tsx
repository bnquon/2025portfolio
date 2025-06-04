import { lora } from "@/app/fonts";
import { DATA } from "../../data/data";

export default function About() {
  return (
    <div className="grid sm:grid-cols-[1fr_1fr] gap-4 sm:gap-0">
      <p className="sm:text-3xl 2xl:text-4xl text-2xl">(About)</p>
      <p className={`${lora.className} 2xl:text-4xl sm:text-3xl 2xl:leading-[48px] xl:leading-[40px] text-2xl leading-[32px]`}>
        {DATA.aboutMe}
      </p>
    </div>
  );
}
