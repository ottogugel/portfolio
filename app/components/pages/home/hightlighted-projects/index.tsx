import { HorizontalDivider } from "@/app/components/divider/horizontal";
import { SectionTitle } from "../section-title"
import { ProjectCard } from "./project-card";
import { Link } from "@/app/components/link";

export const HighlightedProjects = () => {
    return (
      <section className="container py-16">
        <SectionTitle title="Highlights" subtitle="highlights" />
        <HorizontalDivider className="mb-16" />

        <div>
          <ProjectCard />
          <HorizontalDivider className="my-16" />
          <ProjectCard />
          <HorizontalDivider className="my-16" />

          <p className="flex items-center gap-1.5">
            <span className="text-gray-400">Interested?</span>
            <Link href="/projects" className="inline-flex">
              See all
            </Link>
          </p>
        </div>
      </section>
    );
}