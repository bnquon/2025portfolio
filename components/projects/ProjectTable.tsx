"use client";
import { useState } from "react";
import HoverIcon from "./HoverIcon";
import { DATA } from "../../data/data";
import ProjectsRow from "./ProjectRow";

export default function ProjectTable() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const onClick = (projectNumber: string) => {
    if (projectNumber) {
      console.log(`Cursor clicked on project ${projectNumber}`);
      // Handle the specific project click here
      // You can access the full project data: DATA.projects.find(p => p.projectNumber === projectNumber)
    } else {
      console.log("cursor clicked outside projects");
    }
  };

  const handleProjectHover = (projectNumber: string) => {
    setIsHovering(true);
    setHoveredProject(projectNumber);
  };

  const handleProjectLeave = () => {
    setIsHovering(false);
    setHoveredProject(null);
  };
  return (
    <div
      className="flex flex-col gap-12"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Only have this on desktop or laptop */}
      <HoverIcon
        isHovering={isHovering}
        hoveredProject={hoveredProject}
        onClick={onClick}
      />

      {DATA.projects.map((project) => (
        <ProjectsRow
          key={project.projectNumber}
          projectNumber={project.projectNumber}
          techStack={project.techStack}
          description={project.description}
          imageUrl={project.imageUrl}
          onHover={() => handleProjectHover(project.projectNumber)}
          onLeave={handleProjectLeave}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
