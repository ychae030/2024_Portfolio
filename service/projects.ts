import path from "path";
import { promises as fs } from "fs";
import { cache } from "react";

export type ProjectType = {
  id: number;
  title: string;
  overview: string;
  skills: string[];
  path: string;
  img: string;
};

export const getAllProjects = cache(async (): Promise<ProjectType[]> => {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  return fs
    .readFile(filePath, "utf-8")
    .then<ProjectType[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.id < b.id ? -1 : 1)));
});