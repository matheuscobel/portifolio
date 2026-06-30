import type { Project } from "@/content/projects";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: Project;
  reverse?: boolean;
};

const cardImagePositionClass = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
} as const;

export default function ProjectCard({ project, reverse = false }: Props) {
  const imagePosition =
    cardImagePositionClass[project.cardImagePosition ?? "center"];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-8 outline-none transition-all duration-500 hover:border-white/15 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/40 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:p-12"
      aria-label={`Ver projeto: ${project.title}`}
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className={`space-y-8 ${reverse ? "order-1 md:order-2" : ""}`}>
          <h3 className="font-headline text-3xl leading-tight font-bold text-white md:text-4xl">
            {project.title}
          </h3>
          <p className="font-body text-lg leading-relaxed text-neutral-400">{project.description}</p>
        </div>
        <div
          className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-lg ${reverse ? "order-2 md:order-1" : ""}`}
        >
          <Image
            alt={project.coverAlt}
            src={project.cardImage ?? project.coverImage}
            fill
            className={`object-cover ${imagePosition} transition-transform duration-700 group-hover:scale-105`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </Link>
  );
}
