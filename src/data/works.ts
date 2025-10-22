import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 5,
    title: '2Gain - SaaS Financeiro',
    category: 'B2C SaaS',
    thumbnailUrl: '/images/works/2gain-sass.png',
    previewUrl: 'https://2gain.makztech.com',
    description: `
Uma calculadora financeira criada para traders que querem dominar o gerenciamento de risco e tomar decisões mais inteligentes, ela mostra quanto investir em cada operação. No total, mais de 400 clientes confiaram nela para otimizar suas estratégias.

**Problema**
A maioria dos traders lida com o gerenciamento de risco de forma manual e imprecisa. Valores das operações são calculados “no olho”, o que abre espaço para erros, impulsividade e decisões ruins. Faltava uma ferramenta acessível, direta e confiável que automatizasse esse processo e mostrasse, de forma clara, como cada decisão afeta o resultado final.

**Solução e Meu Papel**
Como único desenvolvedor, além de pensar na ideia, cuidei do design, desenvolvimento e vendas. A interface foi pensada para ser leve e objetiva, e o trader entende rapidamente o impacto de cada operação e pode simular cenários em tempo real.

**Tecnologia e Arquitetura**

* Backend em Go com frontend SPA em React/Vite compilados em um único binário via [go:embed](https://pkg.go.dev/embed)
* Arquitetura [DDD](https://github.com/patrickkdev/go-ddd-blueprint) para código modular e escalável
* Banco de dados [PostgresSQL](https://www.postgresql.org) para persistência
* Tradução completa (pt-BR, en, es) com [i18n](https://react.i18next.com/)
* Integração com [Stripe](https://stripe.com) para pagamentos nacionais e internacionais
* Deploy automatizado com Docker e [Dokploy](https://dokploy.com)

**Resultados-Chave**

* Product-market fit validado
* Mais de 400 clientes pagantes
* Faturamento superior a **120 mil reais** nos anos de 2020 e 2021

**Destaques Técnicos**

* **Binário Único:** Backend e frontend compilados juntos, simplificando deploy e manutenção
* **Autenticação Segura:** Sistema próprio baseado em cookies, com recuperação de senha e verificação por e-mail
* **Pagamentos Internacionais:** Integração direta com Stripe
* **Métricas Internas:** Dados de uso capturados no back-end e armazenados no banco, sem dependência de terceiros
* **Internacionalização:** Suporte completo a português, inglês e espanhol
* **CI/CD Automatizado:** Deploy contínuo via GitHub, Docker e Dokploy
* **Alta Performance:** SPA leve e rápida, servida diretamente pelo backend

## Nota do Desenvolvedor
Em uma entrevista técnica, posso demonstrar a arquitetura DDD, binário único com frontend e backend, internacionalização com i18n, integração com Stripe, autenticação segura e deploy automatizado.
`,
    publishedAt: '22 de Outubro de 2019',
    images: ['/images/works/2gain-sass.png', '/images/works/2gain-sass-2.png'],
    featureList: [
      'Teste gratuito para novos usuários',
      'Autenticação segura com cookies, recuperação de senha e verificação por e-mail',
      'Pagamentos nacionais e internacionais via Stripe',
      'Suporte multilíngue: português, inglês e espanhol',
      'SPA leve e rápida, garantindo excelente experiência do usuário',
      'PWA, permitindo instalação em smartphones',
    ],
    attributes: [
      {
        name: 'Tipo',
        value: 'Projeto Pessoal / SaaS',
      },
      {
        name: 'Stack',
        value: 'Golang, React, Vite, PostgreSQL, Stripe, i18n, Docker',
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
