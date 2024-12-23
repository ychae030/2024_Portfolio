import { ProjectType } from "@/service/projects";
import Image from "next/image";
import React from "react";
import StyledFrame from "./StyledFrame";

type Props = Pick<ProjectType, "img">;
export default function ProjectImg({ img }: Props) {
  return (
    <div className="relative p-10 items-center opacity-0 hidden sm:hidden md:hidden lg:grid group-hover:opacity-100">
      <StyledFrame />
      <div className="scale-y-0 group-hover:scale-y-100 duration-300">
        <Image src={img} alt={img} width={250} height={250} />
      </div>
    </div>
  );
}
