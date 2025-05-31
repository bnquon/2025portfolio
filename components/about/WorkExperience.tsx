import ResumeCard from "./ResumeCard";
import { DATA } from "../../data/data";

export default function WorkExperience() {
  return (
    <div className="grid sm:grid-cols-[1fr_1fr] sm:gap-0 gap-4">
      <p className="2xl:text-2xl sm:text-xl text-lg">(Work Experience)</p>
      <div className="flex flex-col sm:gap-8 gap-4">
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
