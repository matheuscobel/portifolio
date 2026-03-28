import Image from "next/image";

type ExperienceItem = {
  badge: string;
  badgeAlt: string;
  period: string;
  role: string;
  company: string;
  description: string;
  compactBadge?: boolean;
  /** Compensa rotação do PNG no ficheiro (ex. arte a -45° → usar 45 para ficar “direita”) */
  compensateRotationDeg?: number;
};

const badgeSizeDefault =
  "size-44 sm:size-48 md:size-40 lg:size-44 xl:size-48";
const badgeSizeCompact =
  "size-38 sm:size-38 md:size-30 lg:size-34 xl:size-40";

/** Um pouco menor que o compact — alinha com as outras badges depois da rotação */
const badgeSizeRotatedInner =
  "size-28 sm:size-28 md:size-26 lg:size-30 xl:size-30";

/** Moldura exterior: lado ≈ inner×√2 para o losango a 45° não cortar */
const badgeRotatedOuterFrame =
  "flex aspect-square shrink-0 items-center justify-center w-[min(100%,11.25rem)] h-[min(100%,11.25rem)] sm:w-[min(100%,12rem)] sm:h-[min(100%,12rem)] md:h-[9.25rem] md:w-[9.25rem] lg:h-[10.75rem] lg:w-[10.75rem] xl:h-[12.75rem] xl:w-[12.75rem]";

/** Faixa de brilho: +38° nas badges normais; com badge a +45°, compensa para o sweep ficar esquerda→direita no ecrã */
const shineStripRotate = "rotate-[38deg]";
const shineStripRotateWhenParentRotated45 = "rotate-[-7deg]";

const badgeFrameBase =
  "relative overflow-hidden transition-transform duration-400 ease-out will-change-transform group-hover:rotate-[10deg]";

const experiences: ExperienceItem[] = [
  {
    badge: "/badges/avanti.png",
    badgeAlt: "Avanti",
    period: "2023",
    role: "Bootcamp UX Design",
    company: "Instituto Atlântico Avanti",
    description: "",
  },
  {
    badge: "/badges/cesar.png",
    badgeAlt: "Cesar School",
    period: "2024",
    role: "TechDesign & Desenvolvimento Ágil",
    company: "Cesar School",
    description: "",
  },
  {
    badge: "/badges/softex.png",
    badgeAlt: "Softex",
    period: "2024",
    role: "Formação Front-end & UX",
    company: "Softex",
    description: "",
  },
  {
    badge: "/badges/estacio.png",
    badgeAlt: "Estácio",
    compactBadge: true,
    compensateRotationDeg: 45,
    period: "2025",
    role: "Análise e Desenvolvimento de Sistemas",
    company: "Estácio",
    description: "",
  },
  {
    badge: "/badges/surfguru.png",
    badgeAlt: "SurfGuru",
    period: "2025 — Hoje",
    role: "UX UI Designer & Front-end",
    company: "SurfGuru",
    description: "",
  },
];

export default function Experience() {
  return (
    <section
      className="mx-4 mt-6 mb-8 overflow-hidden rounded-2xl bg-[#d6d6d6] pt-8 pb-6 md:mx-6 md:mt-8 md:mb-10 md:rounded-3xl md:pt-10 md:pb-4 lg:mx-8 lg:mt-10 lg:mb-12"
      id="about"
    >
      <div className="mx-auto mb-10 max-w-7xl space-y-4 px-6 md:px-8 md:mb-8">
        <p
          className="mx-auto text-center text-2xl text-on-surface md:text-3xl lg:text-4xl"
          style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
        >
          Minha jornada até aqui
        </p>
      </div>

      {/* Desktop/notebook: largura total da viewport; mobile/tablet: coluna única com o mesmo padding */}
      <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:items-start md:gap-3 lg:gap-6 xl:gap-8">
          {experiences.map((item) => (
            <div
              key={item.badge}
              className="group flex min-w-0 flex-col items-center space-y-6 text-center md:space-y-0"
            >
              <div className="flex w-full flex-col items-center md:pb-3">
                <div
                  className={`${badgeFrameBase} ${
                    item.compensateRotationDeg != null
                      ? badgeRotatedOuterFrame
                      : item.compactBadge
                        ? badgeSizeCompact
                        : badgeSizeDefault
                  }`}
                >
                {item.compensateRotationDeg != null ? (
                  <div
                    className={`relative ${badgeSizeRotatedInner}`}
                    style={{ transform: `rotate(${item.compensateRotationDeg}deg)` }}
                  >
                    <Image
                      src={item.badge}
                      alt={item.badgeAlt}
                      width={256}
                      height={256}
                      className="relative z-10 size-full object-contain"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 z-20 overflow-hidden mix-blend-overlay"
                      style={{
                        WebkitMaskImage: `url("${item.badge}")`,
                        maskImage: `url("${item.badge}")`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    >
                      <div
                        className={`absolute -left-1/2 top-1/2 h-[220%] w-[55%] -translate-x-full -translate-y-1/2 ${shineStripRotateWhenParentRotated45} bg-[linear-gradient(90deg,transparent_36%,rgba(255,255,255,0.6)_44%,#ffffff_50%,rgba(255,255,255,0.6)_56%,transparent_64%)] transition-transform duration-350 ease-out group-hover:translate-x-[320%]`}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <Image
                      src={item.badge}
                      alt={item.badgeAlt}
                      width={256}
                      height={256}
                      className="relative z-10 size-full object-contain"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 z-20 overflow-hidden mix-blend-overlay"
                      style={{
                        WebkitMaskImage: `url("${item.badge}")`,
                        maskImage: `url("${item.badge}")`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    >
                      <div
                        className={`absolute -left-1/2 top-1/2 h-[220%] w-[55%] -translate-x-full -translate-y-1/2 ${shineStripRotate} bg-[linear-gradient(90deg,transparent_36%,rgba(255,255,255,0.6)_44%,#ffffff_50%,rgba(255,255,255,0.6)_56%,transparent_64%)] transition-transform duration-700 ease-out group-hover:translate-x-[320%]`}
                      />
                    </div>
                  </>
                )}
                </div>
              </div>
              <div className="w-full shrink-0 space-y-2">
                <span className="text-xs font-bold tracking-widest uppercase text-tertiary">
                  {item.period}
                </span>
                <h4 className="font-headline text-lg font-bold leading-snug text-on-surface md:text-base">
                  {item.role}
                </h4>
                <p className="font-body text-sm text-on-surface-variant">{item.company}</p>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
