import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image"

export const HeroSection = () => {
  return (
    <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-blue-500">Hello, my name is</p>
          <h2 className="text-4xl font-medium mt-2">Otto Gugel</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            I'm a software engineer, deeply passionate about life & technology!
            With over 5 years of professional tech experience, my career goal is
            to bring great solutions to humankind's biggest problems through
            technology.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge name="React Native" />
            ))}
          </div>

          <div>contato</div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto do perfil do Otto Gugel"
        />
      </div>
    </section>
  );
}