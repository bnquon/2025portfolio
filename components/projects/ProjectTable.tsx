"use client";
import { useState } from "react";
import HoverIcon from "./HoverIcon";
import { DATA } from "../../data/data";
import ProjectsRow from "./ProjectRow";

export default function ProjectTable() {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const onClick = () => {
    console.log("clicked");
  }

  return (
    <div
      className="flex flex-col gap-12"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <HoverIcon isHovering={isHovering} onClick={onClick} />

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
  );
}
