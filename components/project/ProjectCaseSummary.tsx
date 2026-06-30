import type { ProjectMeta } from "@/content/projects";

type Props = {
  meta: ProjectMeta;
};

const metaFields: { key: keyof Pick<ProjectMeta, "client" | "role" | "location" | "missao">; label: string }[] = [
  { key: "client", label: "Cliente" },
  { key: "role", label: "Papel" },
  { key: "location", label: "Local" },
  { key: "missao", label: "Missão" },
];

function splitParagraphs(text: string) {
  const parts = text.split(/\n\n/).map((p) => p.trim()).filter(Boolean);
  return parts.length ? parts : [text];
}

export default function ProjectCaseSummary({ meta }: Props) {
  const introParagraphs = splitParagraphs(meta.intro);

  return (
    <section className="bg-black py-12 md:py-18">
      <div className="mx-auto max-w-5xl px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="space-y-6 md:space-y-8">
            {introParagraphs.map((paragraph, i) => (
              <p key={i} className="case-study-intro">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-8">
            {metaFields.map(({ key, label }) => (
              <div key={key}>
                <h3 className="case-study-label mb-2">{label}</h3>
                <p className="case-study-body">{meta[key]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
