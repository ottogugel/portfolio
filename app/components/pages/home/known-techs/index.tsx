import { TbBrandNextjs } from "react-icons/tb"
import { SectionTitle } from "../section-title"
import { KnownTech } from "./known-tech"

export const KnowTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="expertise" title="Knowledge" />

      <div className="grid grid-cols-auto-fit-264 gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnownTech
            tech={{
              icon: <TbBrandNextjs />,
              name: "Next.js",
              startDate: "2025-01-20",
            }}
          />
        ))}
      </div>
    </section>
  );
}