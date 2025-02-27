import { Link } from "@/app/components/link"
import { SectionTitle } from "../../home/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projects"
        title="My Projects"
        className="text-center items-center [&>h3]:text-4xl "
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Here are some projects that I have worked on. Some of them I've built
          from scratch and some I have contributed to.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </section>
  );
}