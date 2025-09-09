"use client";
import { ProjectSection } from "@/app/types/projects";
import Image from "next/image";
import { useState } from "react";

type ProjectSectionProps = {
  sections: ProjectSection[];
};

export const ProjectSections = ({ sections }: ProjectSectionProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="container my-12 md:my-24">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-300 text-center mb-12">
        Galeria
      </h2>

      {/* Grid com todas as imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="flex flex-col items-center gap-4 bg-[#111827] p-4 rounded-xl shadow-md cursor-pointer group"
            onClick={() => setSelectedImage(section.image.url)}
          >
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              <Image
                src={section.image.url}
                width={1080}
                height={672}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                alt={`Imagem da seção ${section.title}`}
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-medium text-gray-200">
              {section.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Modal (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            width={1920}
            height={1080}
            className="max-w-[90%] max-h-[90%] rounded-lg object-contain"
            alt="Imagem ampliada"
            unoptimized
          />
        </div>
      )}
    </section>
  );
};
