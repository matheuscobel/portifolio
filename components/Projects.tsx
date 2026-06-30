import ProjectCard from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/content/projects";
import Link from "next/link";

export default function Projects() {
  const featured = getFeaturedProjects();

  return (
    <section className="bg-black px-8 py-32" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-4">
          <span
            className="text-xs font-bold tracking-widest uppercase text-neutral-400 md:text-xl"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
          >
            Design que gera resultados
          </span>
          <h2 className="font-headline text-5xl font-bold text-white">Projetos em destaque</h2>
        </div>

        <div className="flex flex-col gap-12">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} reverse={index % 2 === 1} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/projects"
            className="rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 font-headline text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] active:scale-[0.98] md:text-base"
          >
            Veja todos os projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
