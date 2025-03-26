import { SectionTitle } from "../section-title"
import { KnownTech } from "./known-tech"
import { KnowTech as IKnownTech } from "@/app/types/project"

type KnownTechsProps = {
  techs: IKnownTech[]
}

export const KnowTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="expertise" title="Knowledge" />

      <div className="grid grid-cols-auto-fit-264 gap-3 mt-[60px]">
        {techs?.map((tech) => (
          <KnownTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};