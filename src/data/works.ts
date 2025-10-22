import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 5,
    title: '2Gain - SaaS Financeiro',
    category: 'B2C SaaS',
    thumbnailUrl: '/images/works/sistema-sinaionline-metrics-charts.png',
    description: `Uma calculadora financeira SaaS B2C para traders, projetada para otimizar o gerenciamento de risco e a tomada de decisões, com mais de 400 clientes pagantes.\n\n**Problema**\n\nTraders de varejo frequentemente lutam com o gerenciamento de risco, tomando decisões baseadas em cálculos manuais complexos e propensos a erros. A falta de ferramentas acessíveis e intuitivas para calcular estratégias de recuperação progressiva resultava em perdas financeiras e decisões impulsivas. Era necessária uma solução que automatizasse esses cálculos, fornecendo dados claros e acionáveis para otimizar a tomada de decisões.\n\n**Solução & Meu Papel**\n\nComo único desenvolvedor, fui responsável por todo o ciclo de vida do 2Gain, desde a concepção do produto até o lançamento e vendas. Desenvolvi uma calculadora financeira SaaS que oferece um conjunto de ferramentas para gerenciamento de risco. A plataforma permite que os usuários simulem cenários e entendam o impacto de suas decisões, com uma interface limpa e de alta performance.\n\n**Tecnologia & Arquitetura**\n\nO backend foi construído em Golang e compilado em um único binário, que também serve o frontend — um SPA React (Vite) embarcado com \`go:embed\`. A arquitetura segue princípios de Domain-Driven Design (DDD), com um banco de dados SQL para persistência. A autenticação é baseada em cookies, e os pagamentos internacionais são processados via Stripe. O deploy é automatizado via GitHub Actions em um VPS com Dokploy (Docker).\n\n**Resultados-Kchave**\n\n*   Mais de 400 clientes pagantes ativos.\n*   Receita superior a R$100.000 entre 2020 e 2021.\n*   Validação de product-market fit com clientes em múltiplos países.\n*   Alta retenção de usuários devido à UX leve e à utilidade da ferramenta.\n\n**Lições & Próximos Passos**\n\n*   A simplicidade e o foco em um nicho específico foram cruciais para a rápida adoção.\n*   O próximo passo seria expandir o conjunto de ferramentas e explorar integrações com plataformas de trading.\n\n**Destaques Técnicos**\n\n*   **Binário Único:** Backend em Go e frontend SPA (React) compilados em um único executável para deploy simplificado.\n*   **Arquitetura DDD:** Código organizado e manutenível seguindo os princípios do Domain-Driven Design.\n*   **Autenticação Segura:** Sistema de autenticação customizado baseado em cookies (incluindo signup, login, recuperação de senha e verificação de e-mail).\n*   **Pagamentos Internacionais:** Integração com Stripe para processar pagamentos em múltiplas moedas.\n*   **Analytics Server-Side:** Coleta de métricas de uso salvas diretamente no banco de dados, sem depender de serviços de terceiros.\n*   **Internacionalização (i18n):** Suporte para três idiomas (pt/en/es) em toda a aplicação.\n*   **Deploy Automatizado:** Pipeline de CI/CD com GitHub Actions para deploy em um VPS via Docker.\n*   **Performance:** Frontend SPA leve e responsivo, servido diretamente pelo backend para baixa latência.\n`,
    publishedAt: '22 de Outubro de 2025',
    images: ['/images/works/sistema-sinaionline-metrics-charts.png'],
    featureList: [
      'Calculadoras progressivas para gerenciamento de risco',
      'Período de teste gratuito (free trial) para novos usuários',
      'Sistema de autenticação seguro com login e recuperação de senha',
      'Integração de pagamentos segura via Stripe',
      'Suporte a múltiplos idiomas (inglês, espanhol e português)',
      'Analytics de uso do lado do servidor',
      'UX leve e performática como Single Page Application (SPA)',
      'Deploy simplificado em um único binário executável',
    ],
    attributes: [
      {
        name: 'Tipo',
        value: 'Projeto Pessoal / SaaS',
      },
      {
        name: 'Stack',
        value: 'Golang, React, Next.js/Vite, SQL, Stripe, Docker',
      },
    ],
  },
  {
    id: 1,
    title: 'Sistema Imobiliário Web',
    category: 'Aplicação Web Full-stack',
    thumbnailUrl: '/images/works/sistema-sinaionline-property-page.png',
    description: `Versão web do sistema Sinaionline para imobiliárias. Desenvolvido por mim, do zero, cobrindo todo o ciclo: design, frontend, backend, integrações com terceiros e parte do banco de dados. Também sou responsável pela hospedagem da aplicação e administração do servidor Linux onde ela está hospedada.\n\n    O sistema permite gerenciar imóveis, clientes, funcionários e leads, alimenta sites imobiliários com dados via API JSON segura usando tokens de API, e recebe leads de várias fontes, como o site da imobiliária, portais integrados e chatbots.`,
    publishedAt: '30 de Julho de 2024',
    images: ['/images/works/sistema-sinaionline-metrics-charts.png', '/images/works/sistema-sinaionline-picture-manager.png', '/images/works/sistema-sinaionline-pipeline.png', '/images/works/sistema-sinaionline-property-page.png'],
    featureList: [
      'Painel administrativo avançado e intuitivo',
      'Organização de itens com suporte a drag-and-drop',
      'Gestão integrada de leads, clientes, imóveis, blogs e funcionários de plantão',
      'Preenchimento inteligente de formulários com sugestões baseadas em IA',
      'Criação e pré-visualização de Landing Pages de imóveis com templates',
      'Sistema de fila para envio de e-mails em massa respeitando limites especificos de cada servidor SMTP',
      'Métricas detalhadas de visualizações de imóveis com gráficos intuitivos',
      'Layout responsivo',
      'Renderização no servidor (Server-Side Rendering)',
      'API JSON segura com autenticação por Token (fornece dados de imóveis, permite inserção de leads por serviços externos, etc)',
    ],
    attributes: [
      {
        name: 'Cliente',
        value: 'Sinaionline Sistemas',
      },
      {
        name: 'Stack',
        value: 'Golang, Templ, HTMX, JS, CSS e MySQL',
      }
    ],
  },
  {
    id: 2,
    title: 'Site da Imobiliária Casa Imóveis',
    category: 'Site institucional com catálogo de imóveis',
    thumbnailUrl: '/images/works/casaimoveis-website.png',
    description: `Site institucional moderno com catálogo de imóveis: apresenta os imóveis de forma atrativa, prioriza a experiência do usuário e reforça a identidade visual da marca.\n      Integra-se ao sistema imobiliário para exibir imóveis atualizados em tempo real, garantindo agilidade na gestão e consistência das informações.`,
    publishedAt: '09 de Novembro de 2024',
    images: ['/images/works/casaimoveis-website.png'],
    featureList: [
      'SEO aprimorado para ranqueamento no Google',
      'Sistema de busca de imóveis com filtros dinâmicos por tipo, preço e localização',
      'Galeria de fotos imersiva com visualização em grid ou tela cheia com zoom',
      'Botões de compartilhamento direto para redes sociais',
      'Contador de visualizações individuais por imóvel',
      'Layout 100% responsivo, otimizado para todos os dispositivos',
      'Formulário de contato com envio direto de mensagens de interesse',
      'Integração com Google Maps para exibição da localização da imobiliária e dos imóveis',
    ],
    attributes: [
      {
        name: 'Cliente',
        value: 'Sinaionline Sistemas',
      },
      {
        name: 'Stack',
        value: 'React.js, Next.js, Typescript e CSS',
      },
    ],
  },
  {
    id: 3,
    title: 'Site da Imobiliária Imoveis de Ubatuba',
    category: 'Site institucional com catálogo de imóveis',
    thumbnailUrl: '/images/works/imoveis-de-ubatuba-website-2.png',
    description: `Site institucional moderno com catálogo de imóveis: apresenta os imóveis de forma atrativa, prioriza a experiência do usuário e reforça a identidade visual da marca.\n      Integra-se ao sistema imobiliário para exibir imóveis atualizados em tempo real, garantindo agilidade na gestão e consistência das informações.`,
    publishedAt: '16 de Setembro de 2024',
    images: ['/images/works/imoveis-de-ubatuba-website.png', '/images/works/imoveis-de-ubatuba-website-2.png'],
    featureList: [
      'SEO aprimorado para ranqueamento no Google',
      'Sistema de busca de imóveis com filtros dinâmicos por tipo, preço e localização',
      'Galeria de fotos imersiva com visualização em grid ou tela cheia com zoom',
      'Botões de compartilhamento direto para redes sociais',
      'Contador de visualizações individuais por imóvel',
      'Layout 100% responsivo, otimizado para todos os dispositivos',
      'Formulário de contato com envio direto de mensagens de interesse',
      'Integração com Google Maps para exibição da localização da imobiliária e dos imóveis',
    ],
    attributes: [
      {
        name: 'Cliente',
        value: 'Sinaionline Sistemas',
      },
      {
        name: 'Stack',
        value: 'React.js, Next.js, Typescript e CSS',
      },
    ],
  },
  {
    id: 4,
    title: 'Site da Imobiliária Mangabeiras',
    category: 'Site institucional com catálogo de imóveis',
    thumbnailUrl: '/images/works/mangabeirasimoveis-website.png',
    description: `Site institucional moderno com catálogo de imóveis: apresenta os imóveis de forma atrativa, prioriza a experiência do usuário e reforça a identidade visual da marca.\n      Integra-se ao sistema imobiliário para exibir imóveis atualizados em tempo real, garantindo agilidade na gestão e consistência das informações.`,
    publishedAt: '22 de Maio de 2025',
    images: ['/images/works/mangabeirasimoveis-website.png'],
    featureList: [
      'SEO aprimorado para ranqueamento no Google',
      'Sistema de busca de imóveis com filtros dinâmicos por tipo, preço e localização',
      'Galeria de fotos imersiva com visualização em grid ou tela cheia com zoom',
      'Botões de compartilhamento direto para redes sociais',
      'Contador de visualizações individuais por imóvel',
      'Layout 100% responsivo, otimizado para todos os dispositivos',
      'Formulário de contato com envio direto de mensagens de interesse',
      'Integração com Google Maps para exibição da localização da imobiliária e dos imóveis',
    ],
    attributes: [
      {
        name: 'Cliente',
        value: 'Sinaionline Sistemas',
      },
      {
        name: 'Stack',
        value: 'React.js, Next.js, Typescript e CSS',
      },
    ],
  },
];
