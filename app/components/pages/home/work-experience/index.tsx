import { SectionTitle } from "../section-title"
import { ExperienceItem } from "./experience-item";
import { workExperience as IWorkExperience } from "@/app/types/work-experience";

type WorkExperienceProps = {
  experiences: IWorkExperience[]
};

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container py-16 flex flex-col gap-10 md:gap-4 lg:gap-16 md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle title="Work Experience" subtitle="experience" />
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem
          key={experience.companyName}
          experience={experience}
          />
        ))}
      </div>
    </section>
  );
};