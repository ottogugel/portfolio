'use client'
import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandGmail, TbBrandLinkedin } from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "https://github.com.br",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://linkedin.com.br",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "mailto:ottogugel99@gmail.com",
    icon: <TbBrandGmail />,
  },
];

export const HeroSection = () => {

  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if(contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
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

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Contact me
              <HiArrowNarrowRight size={10} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic2.png"
          alt="Foto do perfil do Otto Gugel"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  );
}