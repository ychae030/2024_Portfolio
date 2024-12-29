import { getAllProjects } from "@/service/projects";
import React from "react";
import ProjectImg from "./ProjectImg";
import ProjectOverview from "./ProjectOverview";
import ExternalLinkItem from "./ExternalLinkItem";

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <section className="py-32 ">
      <ul className="grid gap-20">
        {projects.map(({ id, title, overview, skills, img, path }) => (
          <ExternalLinkItem key={id} path={path}>
            <ProjectImg img={img} />
            <ProjectOverview
              title={title}
              overview={overview}
              skills={skills}
            />
          </ExternalLinkItem>
        ))}
      </ul>
    </section>
  );
}
