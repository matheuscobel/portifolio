const strengths = [
  {
    icon: "psychology",
    title: "Design orientado a produto",
    description:
      "Eu não desenho telas isoladas, resolvo problemas reais. Trabalho com discovery, pesquisa com usuários e análise de comportamento para criar soluções que impactam retenção e negócio.",
  },
  {
    icon: "manage_search",
    title: "Decisões baseadas em usuários",
    description:
      "Conduzo entrevistas, identifico fricções e transformo insights em melhorias concretas de navegação, usabilidade e conversão.",
  },
  {
    icon: "integration_instructions",
    title: "Do Figma ao código",
    description:
      "Projeto interfaces e também desenvolvo front-end, garantindo consistência entre design e implementação, sem perda de qualidade.",
  },
  {
    icon: "token",
    title: "Escalabilidade com Design Systems",
    description:
      "Participei da criação de Design System e rebranding, estruturando componentes reutilizáveis para acelerar desenvolvimento e manter consistência.",
  },
  {
    icon: "analytics",
    title: "Experiência com produtos complexos",
    description:
      "Atuação em dashboards e plataformas SaaS, lidando com dados, fluxos complexos e necessidades reais de usuários profissionais.",
  },
  {
    icon: "handshake",
    title: "Ponte entre design e engenharia",
    description:
      "Minha base em front-end facilita a comunicação com desenvolvedores, reduz retrabalho e garante entregas mais rápidas e alinhadas.",
  },
];

export default function Strengths() {
  return (
    <section className="bg-black px-8 py-32" id="strengths">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-4">
          <h2 className="font-headline text-4xl font-bold text-white">Pontos fortes</h2>
          <p className="max-w-xl font-body text-lg text-neutral-300 md:text-3xl" style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
          >
            Onde estratégia de produto, pesquisa e execução técnica se encontram.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength) => (
            <div
              key={strength.title}
              className="space-y-4 rounded-xl border border-white/10 bg-white/[0.04] p-10 transition-all hover:border-white/15 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/40"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <span className="material-symbols-outlined text-2xl text-white">{strength.icon}</span>
                </div>
                <h3 className="min-w-0 flex-1 font-headline text-xl font-bold leading-snug text-white">
                  {strength.title}
                </h3>
              </div>
              <p className="font-body leading-relaxed text-neutral-400">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
