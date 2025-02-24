import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/hightlighted-projects";
import { KnowTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
      <HighlightedProjects />
      <WorkExperience />
      <ContactForm />
      <Footer />
    </>
  )
}
