import { getAllProjects } from "@/service/projects";
import React from "react";
import ProjectImg from "./ProjectImg";
import ProjectOverview from "./ProjectOverview";

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <section className="pt-32">
      <ul className="grid gap-20">
        {projects.map(({ id, title, overview, skills, img }) => (
          <li key={id} className="flex gap-10 justify-between">
            <ProjectImg img={img} />
            <ProjectOverview
              title={title}
              overview={overview}
              skills={skills}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
