import PageContainer from "../PageContainer";
import ProjectTable from "./ProjectTable";

export default function ProjectPage() {
  return (
    <PageContainer gap="2xl:gap-16 sm:gap-12 gap-6">
      <section id="projects">
        <p className="2xl:text-4xl sm:text-3xl text-2xl">(Projects)</p>
      </section>
      <ProjectTable />
    </PageContainer>
  );
}
