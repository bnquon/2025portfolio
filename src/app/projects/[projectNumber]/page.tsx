import ProjectDetailsPage from "../../../../components/projects/ProjectDetailsPage";

interface ProjectPageProps {
  params: {
    projectNumber: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const formattedProjectNumber = `(${params.projectNumber})`;
  
  return <ProjectDetailsPage projectNumber={formattedProjectNumber} />;
}