import { Link } from "@/app/components/link";
import { ProjectCard } from "./project-card"
import { Project } from "@/app/types/projects";

type ProjectListProps = {
  projects: Project[]
}

export const ProjectsList = ({ projects }: ProjectListProps) => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-auto-fit-350 gap-x-4 gap-y-6">
      {projects.map((project) => (
        <Link key={project.title} href={`/projects/${project.slug}`}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </section>
  );
};