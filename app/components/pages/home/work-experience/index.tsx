import { SectionTitle } from "../section-title"
import { ExperienceItem } from "./experience-item";

export const WorkExperience = () => {
    return (
      <section className="container py-16 flex gap-16">
        <div className="max-w-[420px]">
          <SectionTitle
            title="Professional experiences"
            subtitle="experiences"
          />
        </div>

        <div className="flex flex-col gap-4">
            <ExperienceItem />
        </div>
      </section>
    );
}