import ProjectDetailsPage from "../../../../components/projects/ProjectDetailsPage";

interface ProjectPageProps {
  params: Promise<{
    projectNumber: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectNumber } = await params;
  const formattedProjectNumber = `(${projectNumber})`;

  return <ProjectDetailsPage projectNumber={formattedProjectNumber} />;
}
