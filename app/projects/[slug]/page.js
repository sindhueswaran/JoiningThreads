import { allProjects } from "contentlayer/generated";
import { Mdx } from "../../components/mdx-components";
import Image from "next/image";
import DateFormat from "../../components/date-format";
import Container from "../../components/container";
import Section from "../../components/section";
import Gallery from "../../components/gallery";
import {
  BASE_PATH,
  SITE_TITLE,
  SITE_DESC,
  SITE_KEYWORDS,
} from "@/lib/constants";

export const generateStaticParams = async () =>
  allProjects.map((project) => ({ slug: project._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params.slug
  ); 
  return { 
    title: `${project.title} | ${SITE_TITLE}`, 
    description: project.description,
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: `${SITE_KEYWORDS}`,
    authors: [{ name: "Sindhu Eswaran" }, { name: "Mohan Kumar", url: "/" }],
    colorScheme: "light",
    creator: "Mohan Kumar",
    publisher: `${project.author}`,
    metadataBase: new URL(`${BASE_PATH}`),
    alternates: {
      canonical: `/${project.slug}`,
    },
    openGraph: {
      title: `Home | ${SITE_TITLE}`,
      description: `${SITE_DESC}`,
      authors: ["Sindhu", "Mohan"],
      images: "/images/jtjllogo.png",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
      },
    },
  };
};

export default function projectLayout({ params }) {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params.slug
  );
  if (!project) throw new Error(`Project not found for slug: ${params.slug}`);

  return (
    <Section>
      <Container>
        <article>
          <div className="grid lg:grid-cols-3 gap-8 mb-10">
            <div className=" ">
              <Image
                className="w-full rounded-md"
                src={project.image}
                alt={project.title}
                width={640}
                height={480}
              />
            </div>
            <div className="lg:col-span-2">
              <h3 className="pb-3 font-serif font-semibold text-jt-primary text-4xl">
                {project.title}
              </h3>
              <h6 className="pb-0.5 text-xl">{project.author}</h6>
              <p className="text-xs">
                <DateFormat dateString={project.date} />
              </p>

              <div className="py-5">
                <Mdx code={project.body.code} />
              </div>
            </div>
          </div>

          <Gallery images={project.imgset} />
        </article>
      </Container>
    </Section>
  );
}
