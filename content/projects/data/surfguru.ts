import type { Project } from "../types";

const coverDestaque = "/images/projects/surfguru/surfguru-destaque.png";
const coverDestaqueMini = "/images/projects/surfguru/surfguru-destaque-mini.png";
const oldHome = "/images/projects/surfguru/surfguru-old-home.png";
const oldForecast = "/images/projects/surfguru/surfguru-old-forecast.png";
const researchResults = "/images/projects/surfguru/surfguru-research-results.png";
const layoutInterview = "/images/projects/surfguru/surfguru-layout-interview.png";
const mapNavigation = "/images/projects/surfguru/surfguru-map-navigation.png";
const newsHub = "/images/projects/surfguru/surfguru-news-hub.png";
const view15Days = "/images/projects/surfguru/surfguru-15days-view.png";
const designSystem = "/images/projects/surfguru/surfguru-design-system.png";
const themes = "/images/projects/surfguru/surfguru-themes.png";
const newHome = "/images/projects/surfguru/surfguru-new-home.png";
const newForecast = "/images/projects/surfguru/surfguru-new-forecast.png";

export const surfguru: Project = {
  slug: "surfguru",
  destaque: true,
  title: "Surfguru Site 3.0",
  caseName: "SURFGURU",
  subtitle: "Modernização da maior plataforma de previsão de ondas do Brasil",
  description:
    "Modernização do site da maior plataforma de previsão de ondas do Brasil. Nova stack, novo design e experiência renovada, preservando a identidade que o público já reconhece.",
  metric: "10",
  metricTitle: "Usuários entrevistados",
  metricText: "Validação antes do desenvolvimento",
  coverImage: coverDestaque,
  cardImage: coverDestaqueMini,
  coverAlt:
    "Surfguru Site 3.0 em desktop, laptop e mobile: mapa, previsão e hub de notícias",
  tags: ["UX/UI", "Front-end", "Pesquisa"],
  heroImageFrameVariant: "forest",
  meta: {
    intro:
      "Surfguru é a maior plataforma de previsão de ondas para surfistas do Brasil. O site existente, construído em PHP, carregava anos de débito técnico e um design que o próprio público reconhecia como ultrapassado.\n\nO novo site reuniu pesquisa com usuários, validação de layout e reconstrução em Next.js. O resultado foi um redesign completo, incluindo novidades como um mapa interativo para navegação, novos temas visuais e um hub de conteúdo.",
    client: "Surfguru",
    role: "UX/UI Designer & Front-end Developer",
    location: "Surfguru",
    missao:
      "Redesenhar e reconstruir o site principal da Surfguru, modernizando tecnologia, design e experiência sem perder a identidade que o público já reconhece.",
  },
  bodyBlocks: [
    {
      title: "Desafio",
      text: [
        "O site antigo era construído em PHP, com design desatualizado e bugs recorrentes.",
        "Mais do que modernizar, o desafio era fazer isso sem gerar estranhamento em um público que tem forte identidade com o produto. Qualquer ruptura brusca de design poderia comprometer a percepção de uma marca consolidada.",
      ],
      imageScrollToggle: {
        options: [
          {
            label: "Home",
            image: {
              src: oldHome,
              alt: "Home do site antigo da Surfguru em PHP",
            },
          },
          {
            label: "Previsão",
            image: {
              src: oldForecast,
              alt: "Página de previsão do site antigo da Surfguru em PHP",
            },
          },
        ],
        caption: "Site em PHP com design ultrapassado e débito técnico acumulado.",
      },
      imageFrameVariant: "muted",
    },
    {
      title: "Pesquisa",
      intro:
        "Antes de reconstruir, precisei entender o que o público valorizava no site antigo e o que precisava mudar de verdade.",
      subsections: [
        {
          title: "Coleta quantitativa e qualitativa",
          text: [
            "Analisei pesquisas anteriores da empresa e conduzi benchmarks de concorrentes para mapear o cenário.",
            "Em seguida, lancei dois formatos de coleta próprios: um questionário quantitativo e um formulário qualitativo, com perguntas aprofundadas na visão dos usuários sobre o produto.",
          ],
          image: {
            src: researchResults,
            alt: "Apresentação dos resultados da pesquisa com stakeholders e colaboradores",
          },
          caption: "Apresentação dos resultados da pesquisa para Stakeholders e colaboradores.",
          imageFrameVariant: "forest",
        },
        {
          title: "Validação com usuários",
          text: [
            "Estruturei as entrevistas em cinco etapas: aquecimento, primeiras impressões, tarefas práticas, avaliação emocional e encerramento.",
            "Com esse roteiro, conduzi entrevistas com 10 usuários para validar a direção do novo layout antes do desenvolvimento.",
          ],
          image: {
            src: layoutInterview,
            alt: "Roteiro de entrevista com etapas, objetivos e perguntas de validação",
          },
          caption: "Roteiro de entrevista usado na validação do novo layout.",
          imageFrameVariant: "muted",
        },
      ],
      imageFrameVariant: "forest",
    },
    {
      title: "Solução",
      intro:
        "O site foi reconstruído em Next.js, TypeScript, Bun e Tailwind. A nova experiência se organiza em torno da previsão, da navegação e das ferramentas que o surfista usa no dia a dia.",
      subsections: [
        {
          title: "Mapa interativo de praias",
          text: "Criei um mapa interativo de praias com tooltip de previsão em tempo real, facilitando a descoberta de condições sem sair da visão geral do litoral.",
          image: {
            src: mapNavigation,
            alt: "Mapa interativo de praias com tooltip de previsão em tempo real",
          },
          caption: "Mapa interativo com previsão em tempo real no tooltip.",
          imageFrameVariant: "forest",
        },
        {
          title: "Navegação e hub de conteúdo",
          text: [
            "Reestruturei, em parceria com outro colaborador, a navegação principal para refletir as prioridades levantadas na pesquisa.",
            "O hub de notícias passou a integrar conteúdo editorial ao fluxo de previsão, mantendo o usuário dentro do ecossistema Surfguru.",
          ],
          image: {
            src: newsHub,
            alt: "Hub de notícias e conteúdo do Surfguru Site 3.0",
          },
          caption: "Hub de notícias e conteúdo integrado ao site.",
          imageFrameVariant: "muted",
        },
        {
          title: "Janela de 15 dias",
          text: [
            "Criei a janela de 15 dias, que permite visualizar toda a previsão de uma vez, sem scroll.",
            "A feature resolve uma dor recorrente no layout antigo, em que o usuário precisava percorrer longas páginas para comparar condições ao longo do tempo.",
          ],
          image: {
            src: view15Days,
            alt: "Janela de 15 dias com previsão completa de ondas e vento",
          },
          caption: "Visualização de 15 dias com ondulação e vento de superfície.",
          imageFrameVariant: "neutral",
        },
      ],
      imageFrameVariant: "forest",
    },
    {
      title: "Design system",
      intro:
        "O visual foi reconstruído a partir da identidade existente, com cuidado para não afastar quem já usava o produto todos os dias.",
      subsections: [
        {
          title: "Base visual",
          text: [
            "O design system foi recriado com nova tipografia, sistema de espaçamento, ícones e componentes reutilizáveis.",
            "A base garante consistência entre as diferentes áreas do site e facilita a evolução do produto ao longo do tempo.",
          ],
          image: {
            src: designSystem,
            alt: "Design system do Surfguru Site 3.0",
          },
          caption: "Design system recriado a partir da identidade Surfguru.",
          imageFrameVariant: "muted",
        },
        {
          title: "Temas escuro, claro e retrô",
          text: [
            "Desenvolvemos três temas visuais: escuro, claro e retrô.",
            "O tema retrô foi pensado para manter a familiaridade com o site atual durante a transição, reduzindo o estranhamento para o público mais antigo.",
          ],
          image: {
            src: themes,
            alt: "Temas visuais escuro, claro e retrô do Site 3.0",
          },
          caption: "Três temas visuais, incluindo o retrô para preservar familiaridade na transição.",
          imageFrameVariant: "forest",
        },
      ],
      imageFrameVariant: "muted",
    },
    {
      title: "Site 3.0",
      text: [
        "O resultado da reconstrução traduz pesquisa, design system e novas features em uma experiência coesa. A home reorganiza navegação, conteúdo e pontos de conversão; a previsão concentra os dados em uma leitura mais clara e modular.",
        "Nas páginas completas abaixo, dá para percorrer o layout novo com o mesmo recorte usado no site antigo.",
      ],
      imageScrollToggle: {
        options: [
          {
            label: "Home",
            image: {
              src: newHome,
              alt: "Home do Surfguru Site 3.0",
            },
          },
          {
            label: "Previsão",
            image: {
              src: newForecast,
              alt: "Página de previsão do Surfguru Site 3.0",
            },
          },
        ],
        caption: "Site 3.0 reconstruído em Next.js, TypeScript, Bun e Tailwind.",
      },
      imageFrameVariant: "forest",
    },
    {
      title: "Pesquisa contínua",
      intro: [
        "Implementei ferramentas de monitoramento no site para acompanhar como as pessoas navegam, quais telas usam com mais frequência e onde surgem fricções na experiência.",
        "Os dados complementam a pesquisa feita antes do desenvolvimento e sustentam iterações futuras com base em uso real, não só em suposição.",
      ],
      subsections: [
        {
          title: "Próximos passos",
          text: [
            "O projeto estabelece a base técnica para iniciativas futuras da Surfguru: mapas interativos avançados, novos modelos de previsão e integração de câmeras ao vivo nas praias.",
            "Construído com tecnologias modernas, o site está preparado para evoluir sem recomeçar do zero.",
          ],
        },
      ],
      imageFrameVariant: "neutral",
    },
  ],
};
