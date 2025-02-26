import { Link } from "@/app/components/link";
import { ProjectCard } from "./project-card"

export const ProjectsList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-auto-fit-350 gap-x-4 gap-y-6">
      <Link href="/projects/nearbyapp">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      </Link>
    </section>
  );
}