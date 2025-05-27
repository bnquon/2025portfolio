import { lora } from "@/app/layout";

export default function IntroAndSocials() {
  return (
    <div className="grid grid-cols-[1fr_1fr] mt-auto">
      <div className={`${lora.className} text-6xl`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget diam
        sed justo vehicula euismod. Nam ultricies purus et orci accumsan
        lobortis.
      </div>
      <div className="flex gap-6 ml-auto h-fit mt-auto">
        <div className="w-[80px] h-[80px] rounded-full bg-red-200" />
        <div className="w-[80px] h-[80px] rounded-full bg-green-200" />
        <div className="w-[80px] h-[80px] rounded-full bg-blue-200" />
      </div>
    </div>
  );
}
