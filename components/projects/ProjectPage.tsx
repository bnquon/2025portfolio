import PageContainer from "../PageContainer";
import ProjectTable from "./ProjectTable";

export default function ProjectPage() {
  return (
    <PageContainer gap="gap-28">
      <p className="text-4xl">(Projects)</p>
      <ProjectTable />
    </PageContainer>
  );
}
