import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCaseBlock from "@/components/project/ProjectCaseBlock";
import ProjectCaseHero from "@/components/project/ProjectCaseHero";
import ProjectCaseSummary from "@/components/project/ProjectCaseSummary";
import { getProjectBySlug, projects } from "@/content/projects";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projeto | Matheus Cobel" };
  return {
    title: `${project.title} | Matheus Cobel`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-black pt-16 md:pt-[4.5rem]">
        <div className="mx-auto max-w-5xl px-8 pt-8 pb-4 md:pt-10">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xl text-white transition-opacity hover:opacity-90 md:text-2xl"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
          >
            <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:-translate-x-2 md:text-2xl">
              arrow_back
            </span>
            Voltar aos projetos
          </Link>
        </div>

        <ProjectCaseHero
          caseName={project.caseName}
          subtitle={project.subtitle}
          imageSrc={project.coverImage}
          imageAlt={project.coverAlt}
          imageFrameVariant={project.heroImageFrameVariant}
        />

        <ProjectCaseSummary meta={project.meta} />

        {project.bodyBlocks.map((block, i) => (
          <ProjectCaseBlock key={`${project.slug}-block-${i}`} block={block} />
        ))}
      </main>
      <Footer />
    </>
  );
}
