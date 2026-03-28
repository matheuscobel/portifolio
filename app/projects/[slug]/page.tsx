import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCaseBlock from "@/components/project/ProjectCaseBlock";
import ProjectCaseHero from "@/components/project/ProjectCaseHero";
import ProjectCaseImpact from "@/components/project/ProjectCaseImpact";
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
        <div className="border-b border-white/10 bg-black">
          <div className="mx-auto max-w-5xl px-8 pt-8 pb-4 md:pt-10">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 transition-colors hover:underline hover:opacity-90"
            >
              ← Voltar aos projetos
            </Link>
          </div>
        </div>

        <ProjectCaseHero
          title={project.caseTitle}
          imageSrc={project.coverImage}
          imageAlt={project.coverAlt}
          imageFrameVariant={project.heroImageFrameVariant}
        />

        <ProjectCaseSummary summary={project.summary} />

        <ProjectCaseImpact intro={project.impact.intro} metrics={project.impact.metrics} />

        {project.bodyBlocks.map((block, i) => (
          <ProjectCaseBlock key={`${project.slug}-block-${i}`} block={block} />
        ))}
      </main>
      <Footer />
    </>
  );
}
