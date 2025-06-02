import { lora } from "@/app/fonts";

export default function About() {
  return (
    <div className="grid sm:grid-cols-[1fr_1fr] gap-4 sm:gap-0">
      <p className="sm:text-3xl 2xl:text-4xl text-2xl">(About)</p>
      <p className={`${lora.className} 2xl:text-4xl sm:text-3xl sm:leading-[34px] 2xl:leading-10 text-xl leading-[28px]`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget diam
        sed justo vehicula euismod. Nam ultricies purus et orci accumsan
        lobortis.
      </p>
    </div>
  );
}
