import PageContainer from "../PageContainer";
import { DATA } from "../../data/data";
import ProjectsRow from "./ProjectRow";

export default function ProjectPage() {
  return (
    <PageContainer gap="gap-28">
      <p className="text-4xl">(Projects)</p>
      <div className="flex flex-col gap-12">
        {DATA.projects.map((project) => (
          <ProjectsRow
            key={project.projectNumber}
            projectNumber={project.projectNumber}
            techStack={project.techStack}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </PageContainer>
  );
}
