import PageContainer from "../PageContainer";
import ProjectTable from "./ProjectTable";

export default function ProjectPage() {
  return (
    <PageContainer gap="sm:gap-28 gap-6">
      <p className="2xl:text-4xl sm:text-3xl text-2xl">(Projects)</p>
      <ProjectTable />
    </PageContainer>
  );
}
