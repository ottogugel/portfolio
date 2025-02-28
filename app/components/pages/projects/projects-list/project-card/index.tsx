import Image from "next/image"

export const ProjectCard = () => {
    return (
      <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-blue-500 opacity-70 hover:opacity-100 hover:shadow-button transition-all group">
        <div className="w-full h-48 overflow-hidden">
          <Image
            width={380}
            height={200}
            src="/images/project.png"
            alt="Thumbnail do Projeto Nearby"
            unoptimized
            className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
          />
        </div>

        <div className="flex-1 flex flex-col p-8">
          <strong className="font-medium text-gray-50/90 group-hover:text-blue-500 transition-all">
            Nearby App
          </strong>
          <p className="mt-2 text-gray-400 line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            fugit veritatis facilis quos necessitatibus aliquam eaque suscipit
            praesentium molestiae natus laborum itaque ea at, sequi, accusantium
            pariatur, totam ut ducimus.
          </p>
          <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
            Next.js, Next Auth, Radix, TypeScript, Prisma, React Query
          </span>
        </div>
      </div>
    );
}