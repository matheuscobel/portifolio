import type { Project } from "../types";



const coverDestaque = "/images/projects/sgocean/sgocean-destaque.png";
const coverDestaqueMini = "/images/projects/sgocean/sgocean-destaque-mini.png";

const layoutAntigoSuape = "/images/projects/sgocean/sgocean-suape-layout-antigo.png";

const mainHomeSuape = "/images/projects/sgocean/sgocean-suape-main-home.png";

const eventsSuape = "/images/projects/sgocean/sgocean-suape-events.png";

const alertsSuape = "/images/projects/sgocean/sgocean-suape-alerts.png";

const tableSuape = "/images/projects/sgocean/sgocean-suape-table.png";



export const sgocean: Project = {

  slug: "dashboard-sg-ocean",

  destaque: true,

  title: "Dashboard SG Ocean",

  caseName: "SGOCEAN",

  subtitle: "SaaS B2B de Inteligência Meteoceanográfica Portuária",

  description:
    "SaaS B2B de inteligência meteoceanográfica para portos. Centraliza previsão, alertas configuráveis e registro de eventos operacionais em um dashboard pensado para quem toma decisão no dia a dia.",

  metric: "3",

  metricTitle: "Regiões atendidas",

  metricText: "Suape e Fernando de Noronha em produção",

  coverImage: coverDestaque,
  cardImage: coverDestaqueMini,

  coverAlt: "Hero do SG Ocean com dashboards de monitoramento meteoceanográfico portuário",

  tags: ["UX/UI", "Front-end", "Dashboard"],

  heroImageFrameVariant: "forest",

  meta: {

    intro:

      "SGOcean é um SaaS B2B de monitoramento meteoceanográfico para operações portuárias, com previsão detalhada, alertas configuráveis e registro inteligente de eventos.\n\nO Porto de Suape foi o primeiro cliente do produto. Hoje a plataforma expande para novas regiões como Fernando de Noronha, apoiando gestores operacionais na tomada de decisão com dados precisos em tempo real.",

    client: "Porto de Suape (cliente inicial)",

    role: "UX/UI Designer & Front-end Developer",

    location: "Surfguru",

    missao:

      "Evoluir um SaaS B2B em estágio inicial para uma plataforma multi-cliente de monitoramento meteoceanográfico e gestão de risco operacional.",

  },

  bodyBlocks: [

    {

      title: "Desafio",

      text: [

        "Suape dependia apenas de uma boia e do radar do aeroporto local para previsão climática, sem ferramenta digital de apoio à decisão, e interdições portuárias eram registradas manualmente.",

        "Quando entrei, o projeto já estava em andamento em fase inicial, iniciado por outro profissional, mas ainda com muito espaço para melhorias para atender às expectativas do cliente. O desafio era assumir essa base, reconstruir a experiência do zero e entregar uma ferramenta que gestores operacionais pudessem usar em tempo real, com dados precisos e atualizados.",

      ],

      image: {

        src: layoutAntigoSuape,

        alt: "Layout inicial do dashboard de Suape com tabela de previsão de 15 dias",

      },

      caption:

        "Estado inicial da plataforma do Porto de Suape ao qual assumi o projeto: uma única tela com a tabela de previsão de 15 dias, sem alertas, registros de eventos ou demais ferramentas de apoio à decisão.",

      imageFrameVariant: "muted",

    },

    {

      title: "Solução",

      text: [

        "Reconstruí integralmente a interface e o front-end da plataforma, implementando previsão detalhada, espectro climático e um sistema de alertas inteligentes configuráveis.",

        "A hierarquia da informação foi estruturada a partir das prioridades definidas junto ao cliente, destacando o resumo do dia, o espectro de previsão, o radar meteorológico e os alertas baseados em limites de risco personalizados pelos gestores.",

      ],

      image: {

        src: mainHomeSuape,

        alt: "Dashboard principal do Porto de Suape com resumo do dia, previsão, alertas e radar",

      },

      caption: [
        "Home SGOcean para o Porto de Suape.",
        "Os cards são personalizados para as ferramentas de cada empresa.",
      ],

      imageFrameVariant: "forest",

    },

    {

      title: "Registro de Eventos",

      text: "Idealizei e desenvolvi, proativamente, uma funcionalidade que cruza automaticamente cada evento operacional com a condição meteorológica do momento, dando à gestão um histórico direto de causa e efeito e abandonando a necessidade do uso de ferramentas externas, criando assim mais independência para o terminal.",

      image: {

        src: eventsSuape,

        alt: "Tela de eventos operacionais com correlação automática às condições meteorológicas",

      },

      caption:
        "Evento fictício para ilustrar a correlação automática entre o registro operacional e as condições meteorológicas do momento.",

      imageFrameVariant: "muted",

    },

    {

      title: "Gestão de Risco",

      text: [
        "Desenvolvi um sistema de alertas em que o próprio gestor define os limites de risco para cada variável ambiental. Cada threshold pode ser classificado em três níveis de impacto operacional: cautela, limite operacional e limite de segurança, refletindo a linguagem já usada na rotina do terminal.",
        "A interface traduz regras complexas em uma estrutura clara e editável: o gestor entende o que está monitorando, ajusta os valores e salva sem depender de suporte técnico, mantendo os alertas sempre alinhados à realidade operacional de Suape.",
      ],

      image: {

        src: alertsSuape,

        alt: "Tela de configuração de limites de segurança e alertas customizáveis",

      },

      caption: "Tela de configuração dos limites de segurança.",

      imageFrameVariant: "forest",

    },

    {

      title: "Evolução contínua",

      text: [
        "O ponto de partida era uma tabela de previsão isolada, funcional, mas sem integração com o restante da plataforma. Ao longo do projeto, essa base evoluiu para uma experiência conectada ao dashboard, com navegação lateral, contexto visual e as ferramentas que Suape passou a usar na rotina operacional.",
        "Construído em React, Vite e Tailwind, o SaaS está em produção e em expansão para novas regiões. Assumi o desenvolvimento desde os estágios iniciais e sigo evoluindo o produto. Hoje lidero, por iniciativa própria, um redesign para simplificar ainda mais o uso no dia a dia dos gestores.",
      ],

      imageCompare: {
        before: {
          src: layoutAntigoSuape,
          alt: "Tabela de previsão no layout inicial da plataforma",
        },
        after: {
          src: tableSuape,
          alt: "Tabela de previsão integrada à estrutura atual do dashboard",
        },
        hint: "Passe o mouse sobre a imagem para comparar o layout inicial com a tabela atual",
      },

      imageFrameVariant: "neutral",

    },

  ],

};

