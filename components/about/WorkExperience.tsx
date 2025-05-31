import ResumeCard from "./ResumeCard";
import { DATA } from "../../data/data";

export default function WorkExperience() {
  return (
    <div className="grid grid-cols-[1fr_1fr]">
      <p className="2xl:text-2xl text-xl">(Work Experience)</p>
      <div className="flex flex-col gap-8">
        {DATA.work.map((work) => (
          <ResumeCard
            key={work.company}
            logoUrl={work.logoUrl}
            companyName={work.company}
            date={work.date}
            role={work.role}
            description={work.description}
          />
        ))}
      </div>
    </div>
  );
}
