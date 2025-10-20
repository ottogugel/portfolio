import { HorizontalDivider } from "@/app/components/divider/horizontal";
import { SectionTitle } from "../section-title";
import { ProjectCard } from "./project-card";
import { Link } from "@/app/components/link";
import { Project } from "@/app/types/projects";

type HighlightedProjectsProps = {
  projects: Project[];
};

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle title="Highlights" subtitle="highlights" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-8" />
          </div>
        ))}
        <p className="flex items-center justify-center gap-1.5">
          <span className="text-gray-400">Got interested?</span>
          <Link href="/projects" className="inline-flex">
            See all
          </Link>
        </p>
        <HorizontalDivider className="my-8" />
      </div>
    </section>
  );
};
