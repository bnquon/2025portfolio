import PageContainer from "../PageContainer";
import ProjectTable from "./ProjectTable";

export default function ProjectPage() {
  return (
    <PageContainer gap="gap-28">
      <p className="2xl:text-4xl sm:text-3xl">(Projects)</p>
      <ProjectTable />
    </PageContainer>
  );
}
