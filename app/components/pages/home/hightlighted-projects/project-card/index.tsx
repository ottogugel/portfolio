import { Link } from "@/app/components/link";
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCard = () => {
    return (
      <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
        <div className="w-full h-full">
          <Image
            width={420}
            height={304}
            src="/images/project.png"
            alt="Thumbnail do Projeto Nearby"
            className="w-full h-[200px] sm:-h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
            <Image
              width={20}
              height={20}
              src="/images/icons/favicon.png"
              alt="Logo do Projeto Nearby"
            />
            Nearby App
          </h3>

          <p className="text-gray-600 my-6">
            The Nearby App is a benefits club mobile application designed to
            help users find and use exclusive coupons at establishments near
            their location. Developed as part of Rocketseat's NLW Pocket Mobile
            event, the app combines simplicity and functionality to connect
            people with local businesses, promoting consumption in the region.
          </p>

          <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
            <TechBadge name="Next.js" />
          </div>

          <Link href="/projects/nearby">
            See project
            <HiArrowNarrowRight />
          </Link>
        </div>
      </div>
    );
}