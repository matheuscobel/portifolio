import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/projects/ProjectCard";
import { getAllProjects } from "@/content/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Matheus Cobel",
  description: "Portfólio de projetos em UX/UI, front-end e design de produto digital.",
};

export default function ProjectsHubPage() {
  const allProjects = getAllProjects();

  return (
    <>
      <Navbar />
      <main className="bg-black pt-16 md:pt-[4.5rem]">
        <section className="px-8 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 space-y-4">
              <span
                className="text-xs font-bold tracking-widest uppercase text-neutral-400 md:text-xl"
                style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
              >
                Portfólio
              </span>
              <h1 className="font-headline text-5xl font-bold text-white md:text-6xl">Projetos</h1>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-neutral-400 md:text-xl md:leading-[1.8]">
                Como designer de produto com experiência em UX/UI e front-end, desenvolvo
                interfaces digitais visualmente refinadas e altamente funcionais, traduzindo
                dados complexos em experiências claras, do discovery à entrega em produção.
              </p>
            </div>

            <div className="flex flex-col gap-12">
              {allProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} reverse={index % 2 === 1} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
