import type { ProjectImpactMetric } from "@/content/projects";

type Props = {
  intro?: string;
  metrics: ProjectImpactMetric[];
};

export default function ProjectCaseImpact({ intro, metrics }: Props) {
  return (
    <section className="border-b border-white/10 bg-black py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-8">
        <h2 className="case-study-section-heading mb-6 md:mb-8">Impacto</h2>
        {intro ? <p className="case-study-body mb-12 max-w-3xl md:mb-16">{intro}</p> : null}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <div key={i} className="space-y-2">
              <p className="case-study-metric-value">{m.value}</p>
              <p className="case-study-metric-desc">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
