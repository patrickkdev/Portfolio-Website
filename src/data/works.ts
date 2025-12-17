import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'Sistema Imobiliário Web',
    category: 'Aplicação Web Full-stack',
    thumbnailUrl: '/images/works/sistema-sinaionline-property-page.png',
    description: `Versão web do sistema Sinaionline para imobiliárias. Desenvolvido por mim, do zero, cobrindo todo o ciclo: design, frontend, backend, integrações com terceiros e parte do banco de dados. Também sou responsável pela hospedagem da aplicação e administração do servidor Linux onde ela está hospedada. O sistema permite gerenciar imóveis, clientes, funcionários e leads, alimenta sites imobiliários com dados via API JSON segura usando tokens de API, e recebe leads de várias fontes, como o site da imobiliária, portais integrados e chatbots.`,
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
    id: 3,
    title: 'Site da Imobiliária Imóveis de Ubatuba',
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
