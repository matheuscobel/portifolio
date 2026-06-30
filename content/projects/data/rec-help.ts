import type { Project } from "../types";

const coverDestaque = "/images/projects/rec-help/rec-help-destaque.png";
const coverDestaqueMini = "/images/projects/rec-help/rec-help-destaque-mini.png";
const wireframes = "/images/projects/rec-help/rec-help-wireframes.png";
const styleGuide = "/images/projects/rec-help/rec-help-style-guide.png";

export const recHelp: Project = {
  slug: "rec-help",
  destaque: false,
  title: "REC Help",
  caseName: "REC HELP",
  subtitle: "Solução mobile de comunicação entre pessoas e ajuda humanitária",
  description:
    "Projeto acadêmico de UX Design para conectar vítimas de desastres climáticos, voluntários e instituições, usando as rotas do dia a dia para levar doações até quem precisa.",
  metric: "3",
  metricTitle: "Perfis de usuário",
  metricText: "Vítimas, voluntários e instituições mapeados",
  coverImage: coverDestaque,
  cardImage: coverDestaqueMini,
  cardImagePosition: "top",
  coverAlt:
    "REC Help: mockups de login e mapa com rota, projeto UX da Softex Pernambuco",
  tags: ["UX/UI", "Pesquisa", "Acadêmico"],
  heroImageFrameVariant: "muted",
  meta: {
    intro:
      "REC Help nasceu durante a Formação Acelerada em Programação da Softex Pernambuco, no módulo de UX Design com o professor Bruno Vitor. Em dupla com Jefferson Burdowski, partimos de um tema livre e fomos parar num problema bem concreto: desastres climáticos em Recife deixam muita gente desamparada, e quem quer ajudar acaba travando por distância, falta de tempo ou dificuldade de chegar nas regiões afetadas.\n\nA ideia do app é conectar vítimas, voluntários e ONGs. A doação viaja nos trajetos que o voluntário já faria de qualquer forma, sem precisar de uma viagem só para isso.",
    client: "Projeto Acadêmico, Softex Pernambuco",
    role: "UX/UI Designer",
    location: "Recife, PE · Jul–Dez 2024",
    missao:
      "Projetar uma solução mobile que aproxime quem precisa de ajuda de quem quer contribuir, com fluxos claros para três perfis de usuário e atenção real a usabilidade e acessibilidade.",
  },
  bodyBlocks: [
    {
      title: "Desafio",
      text: [
        "Recife convive com enchentes, deslizamentos e chuvas fortes de um jeito difícil de prever. Quando um desastre acontece, famílias perdem casa, pertences e acesso ao básico. Ao mesmo tempo, uma rede de solidariedade tenta se organizar em cima da urgência.",
        "O problema não é falta de vontade de ajudar. O que atrapalha é a logística: postos de coleta longe da rotina das pessoas, áreas afetadas com acesso restrito e uma corrida contra o tempo em que cada dia sem doação pesa.",
        "Nossa aposta foi encaixar o esforço do doador no caminho que ele já percorre. Em vez de pedir uma viagem exclusiva até um posto de coleta, o app propõe que voluntários registrem rota e disponibilidade, coletem doações no trajeto e entreguem em instituições parceiras alinhadas com o que as vítimas precisam.",
      ],
      imageFrameVariant: "muted",
    },
    {
      title: "Discovery",
      intro:
        "Com tema livre, precisávamos escolher um problema que valesse o semestre inteiro. Começamos aberto e fomos estreitando até chegar numa pergunta central.",
      subsections: [
        {
          title: "Brainstorming e priorização",
          text: [
            "Fizemos uma sessão de brainstorming para levantar problemas sociais com potencial de impacto. Catalogamos as ideias, agrupamos por afinidade e colocamos tudo na mesa para votação.",
            "Usamos dot-voting: três votos por pessoa, sem repetir voto na mesma ideia e sem votar na própria proposta. É um jeito rápido de forçar a equipe a escolher com critério, não só com entusiasmo.",
            "O problema que ficou foi este: como prestar acolhimento às pessoas que passaram por algum desastre natural na região do Recife.",
          ],
        },
        {
          title: "Definição do problema",
          text: [
            "Depois disso, refinamos o escopo. Mapeamos quem estava no meio (vítimas, doadores, voluntários que transportam e instituições) e qual barreira cada um enfrentava no fluxo de doações.",
            "A solução não seria um marketplace de caronas nem um catálogo de ONGs. O ponto era encaixar a solidariedade na rotina urbana que já existe: trabalho, estudo, deslocamento do dia a dia.",
          ],
        },
      ],
      imageFrameVariant: "neutral",
    },
    {
      title: "Pesquisa e usuários",
      intro:
        "Antes de desenhar telas, precisávamos saber se a dor que a gente intuía fazia sentido. A desk research confirmou o cenário. As proto-personas deram rosto aos três perfis centrais.",
      subsections: [
        {
          title: "Desk research",
          text: [
            "A pesquisa secundária mostrou um padrão: muita gente quer ajudar, mas desiste porque o posto de coleta fica longe e o acesso às áreas afetadas é complicado.",
            "Em situação de desastre, barreira física e burocracia se somam. Só autoridade ou voluntário cadastrado entra em certas regiões, o que afasta quem quer doar por conta e atrasa a chegada dos recursos.",
            "Isso reforçou a aposta em instituições credenciadas como intermediárias e em voluntários que já circulam pela cidade, em vez de depender só de mutirão pontual.",
          ],
        },
        {
          title: "Proto-personas",
          text: [
            "Leonardo Bicalho, 45 anos, Dois Unidos. Ficou desabrigado depois de um deslizamento. Precisa de ajuda rápida e de um canal que não enrole com burocracia no meio do caos.",
            "Luíza Guimarães, 23 anos, Arruda. Desenvolvedora freelancer que sempre quis ajudar, mas não sabe por onde começar. Tem carro e rotina mais flexível; o que falta é ver onde e como contribuir no caminho.",
            "Maria Antônia, 35 anos, Várzea. Administradora de ONG que quer atender todo mundo, mas precisa de previsibilidade nas doações e de um fluxo organizado entre pedido, coleta e distribuição.",
            "Esses três perfis guiaram o escopo: cadastro diferenciado, mapa de oportunidades, portal de notícias e aba de doações para instituições autorizadas.",
          ],
        },
      ],
      imageFrameVariant: "forest",
    },
    {
      title: "Escopo e estrutura",
      intro:
        "Com problema e usuários mapeados, veio a priorização. Nem tudo cabia no semestre, então precisávamos escolher o que dava mais retorno com o esforço que tínhamos.",
      subsections: [
        {
          title: "Matriz impacto × esforço",
          text: [
            "Classificamos os requisitos numa matriz impacto × esforço. Quatro itens de alto impacto entraram na primeira versão: cadastro dos três perfis (vítimas, doadores e instituições), mapa com doações próximas para o voluntário coletar, portal de notícias sobre incidências na cidade e aba de doação para instituições credenciadas.",
            "Outros seis requisitos ficaram anotados para depois. Foi uma escolha consciente de não estourar o escopo acadêmico e ainda assim entregar um fluxo completo nos quatro pilares.",
          ],
        },
        {
          title: "Fluxo da aplicação",
          text: [
            "O fluxo principal liga os três lados. A vítima registra o que precisa. A busca encontra ONGs que atuam naquela demanda. A instituição publica o pedido. O doador vê o anúncio e decide contribuir. O voluntário aceita o transporte, coleta e entrega na instituição. Por fim, a ONG organiza a distribuição e as vítimas recebem os itens.",
            "Desenhamos esse encadeamento antes dos wireframes para cada tela responder a uma etapa real do processo, e não o contrário.",
          ],
        },
      ],
      imageFrameVariant: "muted",
    },
    {
      title: "Esqueleto",
      intro:
        "Com o fluxo fechado, partimos para os wireframes. A prioridade foi navegação clara, hierarquia de informação e consistência entre as áreas do app.",
      text: [
        "A home concentra busca por instituições e pedidos em aberto. Explorar traz o mapa com pins de doação e o botão \"Tô indo!\" para o voluntário aceitar uma coleta. Rotas junta mapa com cadastro de datas e horários disponíveis.",
        "Perfil reúne configurações, relatório de doações e contato. Notícias funciona como feed de ocorrências ambientais. A tela de acessibilidade já entra no esqueleto, com opções para baixa visão, daltonismo, epilepsia, TDAH, dislexia e distúrbios motores.",
      ],
      image: {
        src: wireframes,
        alt: "Wireframes do REC Help: home, acessibilidade, rotas, perfil, notícias e explorar",
      },
      caption:
        "Wireframes das principais telas: home, acessibilidade, rotas, perfil, notícias e mapa de exploração.",
      imageFrameVariant: "neutral",
    },
    {
      title: "Superfície",
      intro:
        "Na camada visual, definimos tipografia, cores e proporção com a regra 60-30-10. A ideia era manter o app legível em contexto de stress e uso ao ar livre.",
      subsections: [
        {
          title: "Guia de estilos",
          text: [
            "Britania Ligatura aparece nos destaques e reforça a identidade do REC Help. No restante da interface, Inter em extra light e semi bold cobre corpo, labels e navegação.",
            "A paleta usa branco como base (60%), cinza claro no suporte (30%) e azul #007aff nas ações (10%). Escolhemos o azul por remeter a confiança e clareza, o que importa quando a pessoa pode estar sob pressão ou com pouca atenção disponível.",
          ],
          image: {
            src: styleGuide,
            alt: "Guia de estilos do REC Help com tipografia Britania e Inter e paleta de cores",
          },
          caption: "Tipografia Britania + Inter e paleta 60-30-10 com azul como cor de destaque.",
          imageFrameVariant: "forest",
        },
      ],
      imageFrameVariant: "muted",
    },
    {
      title: "Reflexões",
      intro:
        "Como projeto acadêmico, o REC Help passou pelo processo de UX inteiro, da estratégia ao visual. Não tinha a pressão de produção, mas pedia coerência metodológica e uma narrativa que fechasse.",
      subsections: [
        {
          title: "Melhorias futuras",
          text: [
            "Para uma próxima versão, ficaram no radar: protótipo em alta fidelidade implementado de ponta a ponta, rede fora da RMR-PE, parceria com governo estadual e acompanhamento em tempo real de ocorrências ambientais.",
            "Hoje eu colocaria mais energia em validação com usuários reais, mesmo em cenário simulado, e em testes de usabilidade com quem depende das opções de acessibilidade. O esqueleto já prevê isso; só teste de campo diria se funciona de verdade sob pressão.",
          ],
        },
        {
          title: "O que aprendi",
          text: [
            "O projeto me deu prática em trabalho em equipe, UI, product discovery e usabilidade com acessibilidade. A metodologia dos cinco planos de Garrett ajudou a dar ordem sem engessar: cada etapa justificava a próxima.",
            "Se fosse refazer o case hoje, investiria mais em entrevistas com gestores de ONG locais e menos em explicar ferramenta de discovery. O processo conta, mas o portfólio fica melhor quando problema e decisão vêm primeiro.",
          ],
        },
      ],
      imageFrameVariant: "neutral",
    },
  ],
};
