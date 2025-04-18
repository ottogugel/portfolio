import { ProjectSections } from "@/app/components/pages/projects/project-sections";
import { ProjectDetails } from "@/app/components/pages/projects/projects-list/project-details";
import { ProjectPageData } from "@/app/types/page-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";

type ProjectProps = {
    params: {
        slug: string;
    }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query MyQuery {
  project(where: {slug: "${slug}"}) {
    pageThumbnail {
      url
    }
    thumbnail {
      url
    }
    sections {
      title
      image {
        url
      }
    }
    title
    shortDescription
    description {
      raw
      text
    }
    technologies {
      name
    }
    liveProjectUrl
    githubUrl
    }
  }
    `;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // 24hours
  );
};

export default async function Project({ params: { slug } }: ProjectProps) {
    const { project} = await getProjectDetails(slug);
    return (
        <>
         <ProjectDetails project={project} />
         <ProjectSections sections={project.sections} />
        </>
    )
}