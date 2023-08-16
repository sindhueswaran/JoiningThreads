import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { compareDesc, format, parseISO } from "date-fns";
import { allProjects, Projects } from "contentlayer/generated";
import DateFormat from "../components/date-format";

export default function ProjectsList() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <Section>
      <Container>
        <SectionTitle> Projects</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <article
                key={index}
                className="rounded-md border shadow-md hover:shadow-lg p-2"
              >
                <Link href={project.slug}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="max-h-64 w-full object-cover rounded-md"
                    width={480}
                    height={360}
                  />
                  <h2 className="text-xl font-semibold font-serif text-jt-primary pt-3">
                    {project.title}
                  </h2>
                  <h6 className="text-md pt-1">{project.description}</h6>
                  <p className="italic text-xs pt-1">
                    <DateFormat dateString={project.date} />
                  </p>
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
