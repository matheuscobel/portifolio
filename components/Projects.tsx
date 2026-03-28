import { projects } from "@/content/projects";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="bg-black px-8 py-32" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 md:text-xl"
          style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}>Projetos em destaque</span>
          <h2 className="font-headline text-5xl font-bold text-white">Design que gera resultados</h2>
        </div>
        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-8 outline-none transition-all duration-500 hover:border-white/15 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/40 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:p-12"
              aria-label={`Ver projeto: ${project.title}`}
            >
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className={`space-y-8 ${project.reverse ? "order-1 md:order-2" : ""}`}>
                  <h3 className="font-headline text-3xl leading-tight font-bold text-white md:text-4xl">{project.title}</h3>
                  <p className="font-body text-lg leading-relaxed text-neutral-400">{project.description}</p>
                  <div className="flex items-baseline gap-4 pt-4">
                    <span className="font-headline text-5xl font-bold text-white">{project.metric}</span>
                    <div className="font-body text-sm text-neutral-500">
                      <p className="font-bold text-neutral-300">{project.metricTitle}</p>
                      <p>{project.metricText}</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-lg ${project.reverse ? "order-2 md:order-1" : ""}`}
                >
                  <Image
                    alt={project.coverAlt}
                    src={project.coverImage}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
