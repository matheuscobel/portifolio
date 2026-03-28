export default function Header() {
  return (
    <section className="relative isolate w-full min-h-[100svh] overflow-hidden lg:min-h-[819px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-black bg-cover bg-center bg-no-repeat lg:bg-[length:115%_auto] lg:bg-[center_top]"
        style={{
          backgroundImage: "url('/images/projects/backgrounds/back-2.jpg')",
        }}
      />
      {/* Dissolve suave da arte → preto — faixa curta na junção com #projects */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(12vh,6rem)] sm:h-[min(13vh,6.5rem)] md:h-[min(14vh,7rem)]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0.55) 68%, #000 100%)",
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-8 pb-20 pt-24 md:pt-28">
        <div className="grid w-full grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="order-1">
            <div className="mx-auto w-full max-w-72 sm:max-w-80 md:max-w-78">
              <img
                alt="Professional portrait of Matheus Cobel"
                className="aspect-[4/5] w-full rounded-lg rounded-br-[105px] object-cover"
                src="/images/projects/professional-pic.jpeg"
              />
            </div>
          </div>
          <div className="order-2 space-y-8 text-white">
            <div className="space-y-4">
              <span className="block text- font-medium uppercase tracking-[0.2em]" style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}>
                UX | UI | Product Designer
              </span>
              <h1 className="font-headline text-6xl leading-[1.1] font-extrabold tracking-tight md:text-7xl">
                Matheus Cobel
              </h1>
            </div>
            <p className="max-w-2xl font-body text-xl leading-relaxed">
              Designer de Produto com foco em UX/UI e Front-end, criando interfaces digitais com ênfase em usabilidade, clareza e tomada de decisão.
            </p>
            <p className="max-w-2xl font-body text-xl leading-relaxed">
              Atuo de ponta a ponta no processo de produto, passando por discovery, pesquisa com usuários, definição de fluxos e arquitetura da informação até prototipação no Figma, validação e análise de comportamento.
            </p>
            <p className="max-w-2xl font-body text-xl leading-relaxed">
              Tenho experiência com dashboards e aplicações web complexas, trabalhando com design systems e tecnologias como React e Tailwind CSS para garantir soluções consistentes e viáveis tecnicamente.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <a
                className="group flex items-center gap-2 text-2xl transition-all hover:gap-4 hover:opacity-90 md:text-3xl"
                href="#projects"
                style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
              >
                Veja meu trabalho
                <span className="material-symbols-outlined text-2xl md:text-3xl">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
