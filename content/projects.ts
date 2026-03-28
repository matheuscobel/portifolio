export type ProjectImageFrameVariant = "neutral" | "muted" | "forest";

export type ProjectImpactMetric = {
  value: string;
  description: string;
};

export type ProjectSummary = {
  mission: string;
  contributions: string;
  client: string;
  clientLinks?: { label: string; href: string }[];
  services: string[];
  role: string;
};

/** Bloco empilhável: título, texto (use \\n\\n para vários parágrafos), imagem opcional + legenda. */
export type ProjectBodyBlock = {
  title: string;
  text: string;
  image?: {
    src: string;
    alt: string;
  };
  caption?: string;
  imageFrameVariant?: ProjectImageFrameVariant;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  metric: string;
  metricTitle: string;
  metricText: string;
  /** URL absoluta ou caminho em /public, ex.: /images/projects/meu-slug/cover.webp */
  coverImage: string;
  coverAlt: string;
  reverse: boolean;
  tags: string[];
  /** Título exibido no hero escuro da página de case */
  caseTitle: string;
  heroImageFrameVariant?: ProjectImageFrameVariant;
  summary: ProjectSummary;
  impact: {
    intro?: string;
    metrics: ProjectImpactMetric[];
  };
  bodyBlocks: ProjectBodyBlock[];
};

export const projects: Project[] = [
  {
    slug: "fluxo-onboarding-mobilidade",
    title: "Fluxo de onboarding para app de mobilidade urbana",
    description:
      "Pesquisa com usuários, jornada atual e novo fluxo em poucos passos — menos abandono na primeira semana e métricas de ativação alinhadas ao negócio.",
    metric: "42%",
    metricTitle: "Redução de drop-off",
    metricText: "no cadastro após o redesenho do fluxo",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpi0NA5m_4-oFV52UkPdexKdZIPQxs7DOjr4flvkY383pOYa7RHPdLxNUmba44arZlYXtdeXunS-g0wYolVUAMjf2IVYFFJj1Mds-MoPP-bbfpHUidLuuFNhQhWEFNE3ogiv_Vu39GhowGs_3K4Ep7OPeShUydX-mHTzWU66C8FMgDY_PfUlA1YdbqwS54RlHmODkBdGi5gcPunJ-BM8dFkaMT0WCfoSVS7Exrv_O0w72wE12tvqQohzx4TxGrZCxPTb4PCsltdbPM",
    coverAlt: "Telas do fluxo de onboarding do app de mobilidade",
    reverse: false,
    tags: ["UX Research", "UI", "Mobile"],
    caseTitle: "UX de ponta a ponta para reduzir abandono no primeiro acesso ao app de mobilidade",
    heroImageFrameVariant: "forest",
    summary: {
      mission:
        "Simplificar o cadastro e a primeira experiência no app, alinhando expectativas do usuário com requisitos de segurança e compliance — sem sacrificar velocidade.",
      contributions:
        "Conduzi pesquisas com usuários, mapeei a jornada atual, propus um novo fluxo em etapas e desenhei as telas em colaboração com engenharia. Acompanhei testes de usabilidade e iterações com base em dados de funil.",
      client: "Mobilidade urbana • São Paulo",
      services: [
        "UX Research",
        "UI Design",
        "Prototipação",
        "Testes de usabilidade",
        "Handoff com desenvolvimento",
      ],
      role: "Product Designer (UX/UI)",
    },
    impact: {
      intro: "Resultados observados após o lançamento do novo fluxo e monitoramento contínuo.",
      metrics: [
        { value: "42%", description: "Redução de abandono no cadastro em relação à linha de base" },
        { value: "28%", description: "Aumento na taxa de ativação na primeira semana" },
        { value: "4.6", description: "Nota média de satisfação no pós-cadastro (escala 1–5)" },
        { value: "12", description: "Iterações guiadas por dados em 8 semanas" },
      ],
    },
    bodyBlocks: [
      {
        title: "Wireframes",
        text:
          "Comecei explorando fluxos alternativos em baixa fidelidade para validar a ordem das etapas e o nível de detalhe em cada tela.\n\nO foco foi reduzir campos por passo e antecipar erros com mensagens claras, antes de investir em visual final.",
        image: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpi0NA5m_4-oFV52UkPdexKdZIPQxs7DOjr4flvkY383pOYa7RHPdLxNUmba44arZlYXtdeXunS-g0wYolVUAMjf2IVYFFJj1Mds-MoPP-bbfpHUidLuuFNhQhWEFNE3ogiv_Vu39GhowGs_3K4Ep7OPeShUydX-mHTzWU66C8FMgDY_PfUlA1YdbqwS54RlHmODkBdGi5gcPunJ-BM8dFkaMT0WCfoSVS7Exrv_O0w72wE12tvqQohzx4TxGrZCxPTb4PCsltdbPM",
          alt: "Grade de wireframes do fluxo de onboarding",
        },
        caption: "Wireframes do fluxo de cadastro e primeira sessão",
        imageFrameVariant: "muted",
      },
      {
        title: "UI Design",
        text:
          "Com o fluxo validado, apliquei o design system do produto, estados de erro e sucesso, e microcopy consistente com o tom da marca.\n\nA hierarquia visual reforça uma etapa por vez, mantendo o usuário orientado.",
        image: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuFGhvFhuNTw4hBLcaYbg6gGcBMmMZ67tjlBa5v_23pshWHJu1eu9SXZdSOsGOghdqwdZEA1XHiPuIFrw71HXX0zvCXJrPhM6UdkTIw_FW1GdFDt1ugxp4nIwQVjVugKk6ogAmv6BXkmOc1O__ntZdgnE-OiFi4v2AAxWivY9oXAEFOMeelaobW2C8025JKRPZVn4O3UMrFOTeQcrajTA0eOPLYvCEyvjKe8xEcQazK7TpOWpsH8HvVwHUmcCLTUeCchVMgdO2SVOA",
          alt: "Telas finais de interface do onboarding",
        },
        caption: "Interface final — onboarding e confirmação",
        imageFrameVariant: "forest",
      },
    ],
  },
  {
    slug: "design-system-saas",
    title: "Design system e biblioteca de componentes para produto B2B",
    description:
      "Tokens de cor e tipo, componentes acessíveis e documentação viva — time de produto entrega telas mais rápido com consistência visual entre web e marketing.",
    metric: "3×",
    metricTitle: "Velocidade de handoff",
    metricText: "média em novas features após a biblioteca centralizada",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYYm9X2AqU6jTpypah1baeDQTtmOhzFLKEReqe_s9umHIpb6Y37EeSRzNXdndVMdt3En0U7oaViKkD3VErQg-whuHpwJ_hbjObVQ9DW_hRzt6WM1lBxczKBeZypDUnnHvL3Aea5AI3_7Nb7Mcd9BDLU5AkuZ5psvqpsOLfXN0TKqsO2ETejAPqiCSyC_3CngV2QMIr-CRXD5UPlxVjxeTdaeyxrL4Aj-FgmNdtGWj4miMIkBoFNyRZD1yLNLOsKW-H9Xp_9t0jIGQL",
    coverAlt: "Componentes do design system em grade",
    reverse: true,
    tags: ["Design system", "UI", "Acessibilidade"],
    caseTitle: "Design system e biblioteca de componentes para produto B2B",
    heroImageFrameVariant: "forest",
    summary: {
      mission:
        "Criar uma fundação única de tokens e componentes para alinhar marketing e produto, com foco em acessibilidade e velocidade de entrega.",
      contributions:
        "Defini tokens semânticos, documentei padrões de uso, desenhei componentes no Figma e alinhei com a implementação em React/Storybook. Facilitei sessões com squads para adoção gradual.",
      client: "SaaS B2B • Remoto",
      services: [
        "UI Design",
        "Design system",
        "Documentação",
        "Acessibilidade (WCAG)",
        "Colaboração com front-end",
      ],
      role: "Design Lead — UI & Systems",
    },
    impact: {
      intro: "Indicadores após centralização da biblioteca e adoção pelo time.",
      metrics: [
        { value: "3×", description: "Ganho médio de velocidade no handoff de novas telas" },
        { value: "40+", description: "Componentes documentados com variantes e estados" },
        { value: "100%", description: "Cobertura de contraste AA nos componentes core" },
        { value: "2", description: "Squads de produto usando a mesma base em paralelo" },
      ],
    },
    bodyBlocks: [
      {
        title: "Fundação e tokens",
        text:
          "Partimos de uma auditoria visual do produto e do site para extrair decisões inconsistentes. Em seguida, consolidamos cores, tipografia e espaçamento em tokens semânticos reutilizáveis.\n\nIsso permitiu que marketing e produto falassem a mesma língua sem travar evoluções futuras.",
        image: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYYm9X2AqU6jTpypah1baeDQTtmOhzFLKEReqe_s9umHIpb6Y37EeSRzNXdndVMdt3En0U7oaViKkD3VErQg-whuHpwJ_hbjObVQ9DW_hRzt6WM1lBxczKBeZypDUnnHvL3Aea5AI3_7Nb7Mcd9BDLU5AkuZ5psvqpsOLfXN0TKqsO2ETejAPqiCSyC_3CngV2QMIr-CRXD5UPlxVjxeTdaeyxrL4Aj-FgmNdtGWj4miMIkBoFNyRZD1yLNLOsKW-H9Xp_9t0jIGQL",
          alt: "Documentação de tokens e tipografia",
        },
        caption: "Escala tipográfica e tokens de cor",
        imageFrameVariant: "muted",
      },
      {
        title: "Biblioteca de componentes",
        text:
          "Os componentes foram especificados com estados, tamanhos e acessibilidade em mente. A documentação no Storybook conecta decisões de design ao código.\n\nSquads passaram a montar fluxos a partir de blocos validados, reduzindo retrabalho.",
        image: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYYm9X2AqU6jTpypah1baeDQTtmOhzFLKEReqe_s9umHIpb6Y37EeSRzNXdndVMdt3En0U7oaViKkD3VErQg-whuHpwJ_hbjObVQ9DW_hRzt6WM1lBxczKBeZypDUnnHvL3Aea5AI3_7Nb7Mcd9BDLU5AkuZ5psvqpsOLfXN0TKqsO2ETejAPqiCSyC_3CngV2QMIr-CRXD5UPlxVjxeTdaeyxrL4Aj-FgmNdtGWj4miMIkBoFNyRZD1yLNLOsKW-H9Xp_9t0jIGQL",
          alt: "Grade de componentes do design system",
        },
        caption: "Componentes com variantes e estados",
        imageFrameVariant: "forest",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
