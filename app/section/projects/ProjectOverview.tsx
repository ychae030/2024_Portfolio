import { ProjectType } from "@/service/projects";
import React from "react";
import StyledFrame from "./StyledFrame";

type Props = Omit<ProjectType, "img" | "path" | "id">;

export default function ProjectOverview({ title, overview, skills }: Props) {
  return (
    <div className="flex-1 relative p-10 cursor-pointer">
      <StyledFrame />
      <h3 className="text-4xl sm:text-7xl font-[family-name:var(--font-display)] mb-8">
        {title}
      </h3>
      <div className="grid sm:flex gap-10">
        <dl className="flex flex-col gap-3 w-2/3 justify-start">
          <dt className="text-brand">OVERVIEW</dt>
          <dd className="self-start">{overview}</dd>
        </dl>
        <dl className="flex flex-col gap-3 w-1/3">
          <dt className="text-brand">SKILLS</dt>
          <div>
            {skills.map((skill, i) => (
              <dd key={i}>{skill}</dd>
            ))}
          </div>
        </dl>
      </div>
    </div>
  );
}
