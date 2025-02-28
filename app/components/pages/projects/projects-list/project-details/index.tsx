import { TechBadge } from "@/app/components/tech-badge";
import { SectionTitle } from "../../../home/section-title"
import { Button } from "@/app/components/button";
import { TbBrandGit } from "react-icons/tb";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { Link } from "@/app/components/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

export const ProjectDetails = () => {
    return (
      <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            background: "url(/images/hero-bg.png) no-repeat center/cover",
          }}
        />
        <SectionTitle
          subtitle="Projects"
          title="Nearby App"
          className="text-center items-center sm:[&>h3]:text-4xl"
        />
        <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
          The Nearby App is a benefits club mobile application designed to help
          users find and use exclusive coupons at establishments near their
          location. Developed as part of Rocketseat's NLW Pocket Mobile event,
          the app combines simplicity and functionality to connect people with
          local businesses, promoting consumption in the region.
        </p>

        <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
          <TechBadge name="React Native" />
          <TechBadge name="Tailwind CSS" />
          <TechBadge name="Axios" />
          <TechBadge name="Expo" />
          <TechBadge name="TypeScript" />
        </div>

        <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
          <a href="https://github.com/ottogugel/nearby" target="_blank">
            <Button>
              <TbBrandGit size={20} />
              Repository
            </Button>
          </a>
          <a className="opacity-50">
            <Button>
              <HiOutlineGlobeAlt size={20} />
              Live App
            </Button>
          </a>
        </div>
        <Link href="/projects">
          <HiArrowNarrowLeft size={16} />
          Back to projects
        </Link>
      </section>
    );
}