import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'Sistema Imobiliário Web',
    category: 'Full-stack',
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
    title: 'Site da Fam Imóveis BH',
    category: 'Front-end',
    thumbnailUrl: '/images/works/fam-index.png',
    description: `Site institucional moderno com catálogo de imóveis: apresenta os imóveis de forma atrativa, captura leads e reforça a identidade visual da empresa.`,
    publishedAt: '16 de Setembro de 2024',
    images: ['/images/works/fam-index.png', '/images/works/fam-index-cards.png', '/images/works/fam-property-page.png', '/images/works/fam-property-page-2.png'],
    featureList: [
      'Sistema de busca de imóveis com filtros dinâmicos por tipo, preço e localização',
      'Formulário de contato com envio direto de mensagens de interesse para o sistema através da API',
      'SEO aprimorado para ranqueamento no Google com palavras-chave, JSON-LD, OpenGraph, Twitter Cards, sitemap dinâmico, etc',
      'Galeria de fotos imersiva com visualização em grid ou carrossel com zoom',
      'Botões de compartilhamento direto para redes sociais',
      'Vídeo banner moderno',
      'Contagem de visualizações e compartilhamentos individuais por imóvel',
      'Layout 100% responsivo, otimizado para todos os dispositivos',
      'Integração com Google Maps para exibição da localização da imobiliária e dos imóveis',
    ],
    attributes: [
      {
        name: 'Cliente',
        value: 'Fam Imóveis BH',
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
    category: 'Front-end',
    thumbnailUrl: '/images/works/casaimoveis-website.png',
    description: `Site institucional moderno com catálogo de imóveis: apresenta os imóveis de forma atrativa, captura leads e reforça a identidade visual da empresa.`,
    publishedAt: '09 de Novembro de 2024',
    images: ['/images/works/casaimoveis-website.png'],
    featureList: [
      'Sistema de busca de imóveis com filtros dinâmicos por tipo, preço e localização',
      'Formulário de contato com envio direto de mensagens de interesse para o sistema através da API',
      'SEO aprimorado para ranqueamento no Google com palavras-chave, JSON-LD, OpenGraph, Twitter Cards, sitemap dinâmico, etc',
      'Galeria de fotos imersiva com visualização em grid ou carrossel com zoom',
      'Botões de compartilhamento direto para redes sociais',
      'Vídeo banner moderno',
      'Contagem de visualizações e compartilhamentos individuais por imóvel',
      'Layout 100% responsivo, otimizado para todos os dispositivos',
      'Integração com Google Maps para exibição da localização da imobiliária e dos imóveis',
    ],
    attributes: [
      {
        name: 'Cliente',
        value: 'Casa Imóveis',
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
    description: `Site institucional moderno com catálogo de imóveis: apresenta os imóveis de forma atrativa, captura leads e reforça a identidade visual da empresa.`,
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
