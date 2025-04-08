import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectsList } from "../components/pages/projects/projects-list";
import { ProjectsPageData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

const getDataPage = async (): Promise<ProjectsPageData> => {
  const query = `
  query MyQuery {
  projects {
    shortDescription
    slug
    title
    thumbnail {
      url
    }
    technologies {
      name
    }
  }
}
  `;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // 24hours
  );
};

export default async function Projects() {

  const { projects } = await getDataPage();

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  );
}

export async function generateStaticParams() {
  [
    {
      slug: 'nearby-app'
    },
    {
      slug: ''
    },
    {
      slug: ''
    }
  ]
}