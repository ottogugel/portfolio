'use client'
import { SectionTitle } from "../section-title"
import { KnownTech } from "./known-tech"
import { KnownTech as IKnownTech } from "@/app/types/projects";
import { motion } from 'framer-motion';

type KnownTechsProps = {
  techs: IKnownTech[];
};

export const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="expertise" title="Knowledge" />

      <div className="grid grid-cols-auto-fit-264 gap-3 mt-[60px]">
        {techs?.map((tech, i) => (
          <motion.div
          key={tech.name}
          initial={{ opacity: 0, x: - 100}}
          whileInView={{ opacity: 1, x: 0}}
          exit={{ opacity: 0, x: -100}}
          transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};