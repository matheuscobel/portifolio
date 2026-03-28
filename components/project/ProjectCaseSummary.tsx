import type { ProjectSummary } from "@/content/projects";

type Props = {
  summary: ProjectSummary;
};

export default function ProjectCaseSummary({ summary }: Props) {
  return (
    <section className="border-b border-white/10 bg-black py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-8">
        <h2 className="case-study-section-heading mb-12 md:mb-16">Resumo</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="space-y-10">
            <div>
              <h3 className="case-study-label mb-3">Missão</h3>
              <p className="case-study-body whitespace-pre-line">{summary.mission}</p>
            </div>
            <div>
              <h3 className="case-study-label mb-3">Minhas contribuições</h3>
              <p className="case-study-body whitespace-pre-line">{summary.contributions}</p>
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="case-study-label mb-3">Cliente</h3>
              <p className="case-study-body">{summary.client}</p>
              {summary.clientLinks && summary.clientLinks.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {summary.clientLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-white underline decoration-white/35 underline-offset-4 transition-colors hover:decoration-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h3 className="case-study-label mb-3">Serviços</h3>
              <ul className="case-study-body list-inside list-disc space-y-2 marker:text-white">
                {summary.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="case-study-label mb-3">Meu papel</h3>
              <p className="case-study-body">{summary.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
