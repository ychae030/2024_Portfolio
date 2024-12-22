import { ProjectType } from "@/service/projects";
import Image from "next/image";
import React from "react";
import StyledFrame from "./StyledFrame";

type Props = Pick<ProjectType, "img">;
export default function ProjectImg({ img }: Props) {
  return (
    <div className="relative p-10 grid items-center">
      <StyledFrame />
      <Image src={img} alt={img} width={250} height={250} />
    </div>
  );
}
