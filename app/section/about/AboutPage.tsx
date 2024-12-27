import { getDoc } from "@/service/projects";
import About from "./About";

export default async function AboutPage() {
  const { content } = await getDoc("about");

  return <About content={content} />;
}
