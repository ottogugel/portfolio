import Image from "next/image"

export const ExperienceItem = () => {
    return (
      <div className="grid grid-cols-[40px, 1fr] gap-4 md:gap-10">
        <div>
          <div className="rounded-full border border-gray-500 p-0.5">
            <Image src="/images/icons/powergestor.png" width={40} height={40} alt="Logo da empresa PowerGestor" className="rounded-full" />
          </div>

          <div className="h-full w-[1px] bg-gray-800" />
        </div>
      </div>
    );
}