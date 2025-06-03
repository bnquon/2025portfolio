"use client";
import { useState } from "react";
import HoverIcon from "./HoverIcon";
import { DATA } from "../../data/data";
import ProjectsRow from "./ProjectRow";

export default function ProjectTable() {
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = window.innerWidth < 768;

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Only have this on desktop or laptop */}
      {!isMobile && <HoverIcon isHovering={isHovering} />}

      {DATA.projects.map((project) => (
        <ProjectsRow
          key={project.projectNumber}
          projectNumber={project.projectNumber}
          techStack={project.techStack}
          summary={project.summary}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
}
