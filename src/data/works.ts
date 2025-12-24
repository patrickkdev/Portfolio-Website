import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'Sistema Imobiliário Web',
    subtitle: 'Versão web do sistema Sinaionline para imobiliárias',
    thumbnailUrl: '/images/works/sistema-sinaionline-property-page.png',
    description: `Sistema completo para imobiliárias desenvolvido do zero em Go, seguindo arquitetura DDD e princípios de software escalável. A plataforma permite a gestão centralizada de imóveis, fotos, leads, clientes, métricas, funcionários, contratos, landing page de imóveis, artigos, além de integrações com IA e sistemas externos do mercado imobiliário.

Inclui uma API para consulta externa de imóveis, recebimento de leads, envio de e-mails em massa e integrações com parceiros.
    
![Sistema Imobiliário Web – Página do imóvel](/images/works/sistema-sinaionline-property-page.png)

![Sistema Imobiliário Web – Gestão de fotos do imóvel](/images/works/sistema-sinaionline-picture-manager.png)

![Sistema Imobiliário Web – Métricas](/images/works/sistema-sinaionline-metrics-charts.png)

![Sistema Imobiliário Web – Pipeline de leads](/images/works/sistema-sinaionline-pipeline.png)

### Recursos

* **Arquitetura multi-tenant**, permite múltiplas imobiliárias na mesma plataforma com isolamento de dados
* **Integração com sistemas externos** como C2S, AT1, Lais IA, ZapImóveis, Chaves na Mão e outros
* **Painel administrativo avançado e intuitivo**, focado em produtividade
* **Gestão completa de imóveis**, incluindo fotos, leads, clientes, contratos, landing pages, blogs e funcionários de plantão
* **Pipeline de leads visual**, com organização via *drag-and-drop* (Sortable.js)
* **Preenchimento inteligente de formulários**, com sugestões baseadas em IA
* **Criação, edição e pré-visualização de Landing Pages de imóveis** a partir de templates
* **Sistema de fila para envio de e-mails em massa**, respeitando limites de cada servidor SMTP
* **Métricas detalhadas de visualizações de imóveis**, apresentadas em gráficos interativos
* **Scroll infinito** em listagens para navegação fluida
* **Busca avançada**, com filtros e ordenação customizáveis
* **Layout totalmente responsivo**, adaptado para desktop e mobile
* **Cache estratégico de dados**, focado em performance e redução de carga
* **Server-Side Rendering (SSR)** para melhor SEO e tempo de carregamento
* **API JSON segura**, com autenticação via token para acesso externo
`,
    publishedAt: '30 de Julho de 2024',
    attributes: [
      {
        name: 'Cliente',
        value: 'Sinaionline Sistemas',
      },
      {
        name: 'Stack',
        value: 'Golang, Templ, HTMX, JS, CSS e MySQL',
      },
      {
        name: 'Tags',
        value: 'Front-end, Back-end, Sistema, UI/UX, API, Banco de Dados, Integrações, Hospedagem, Arquitetura'
      },
    ],
  },
  {
    id: 2,
    title: 'ChatMaster',
    subtitle: 'Aplicação desktop para automação do WhatsApp - Chatbot e envio em massa de mensagens',
    thumbnailUrl: '/images/works/chatmaster-website.png',
    description: `![ChatMaster Website](/images/works/chatmaster-website.png)
    
O ChatMaster foi um aplicativo desktop para automação do WhatsApp. O projeto explorava a API não oficial do WhatsApp Web, viabilizando automações de alto valor, como respostas automáticas e envio em massa de mensagens.

Com o tempo, a dependência de uma API não oficial, que quebrava com frequência e trazia um risco real de banimento de contas, tornou-se um fator limitante, levando à descontinuação do projeto, embora tecnicamente seja possível ser retomado hoje com a atualização das dependências.

Ainda assim, o ChatMaster é um projeto do qual me orgulho. Além de ter faturado com a venda de licenças, envolveu front-end, back-end, desenvolvimento com Electron, controle de assinaturas e engenharia reversa, trazendo aprendizados importantes sobre integrações não suportadas oficialmente.

Se eu fosse retomar o projeto hoje, trocaria a API pela oficial, mesmo com suas burocracias e restrições, e integraria IA para aprimorar o modo chatbot.

### Demonstração do envio em massa de mensagens:
<video src="/images/works/chatmaster-envio-em-massa.mp4" controls></video>

### Demonstração do chatbot:
<video src="/images/works/chatmaster-chatbot.mp4" controls></video>

### Recursos:
* Envio em massa de mensagens para lista de números, participantes de grupos, contatos salvos, etc
* Construtor de conversas visual e intuitivo em árvore
* Customização de menus interativos com opções numéricas (1, 2, 3, 0 para voltar)
* Servidor back-end simples em Python com MySQL para controle de acesso dos usuários e assinaturas
* Webhook no servidor back-end para processar eventos de assinatura vindos do gateway de pagamentos
* Possibilidade de usar placeholders como \`\`\`\${nome}\`\`\`, que permitem personalização automática das mensagens de acordo com o contato
`,
    publishedAt: '30 de Julho de 2022',
    attributes: [
      {
        name: 'Stack',
        value: 'Typescript, Electron.js, whatsapp-web.js, Python e CSS',
      },
      {
        name: 'Tags',
        value: 'Full-stack, Desktop, Chatbot, WhatsApp, Automação',
      }
    ],
  },
  {
    id: 3,
    title: 'Site de Imobiliária',
    subtitle: 'Site institucional moderno com catálogo de imóveis',
    thumbnailUrl: '/images/works/fam-index.png',
    description: `Site institucional moderno com catálogo de imóveis, focado em apresentação visual, captação de leads e fortalecimento da identidade da marca. Desenvolvido com atenção a performance, SEO e experiência do usuário.
    
![Site de Imobiliária](/images/works/fam-index.png)
![Site de Imobiliária](/images/works/fam-index-cards.png)
![Site de Imobiliária](/images/works/fam-property-page.png)
![Site de Imobiliária](/images/works/fam-property-page-2.png)

### Recursos:
* **Banner em vídeo**
* **Catálogo de imóveis com busca avançada**, incluindo filtros dinâmicos por tipo, faixa de preço e localização
* **Captura de leads**, enviando formulário de interesse e contato diretamente para o sistema interno
* **Galeria de fotos imersiva**, com visualização em grid ou carrossel com suporte a zoom
* **Botões de compartilhamento** para redes sociais e aplicativos de mensagem
* **Métricas por imóvel**, com contagem individual de visualizações e compartilhamentos
* **Layout 100% responsivo**, otimizado para desktop, tablet e dispositivos móveis
* **SEO avançado**, otimizado para performance e ranqueamento em motores de busca, incluindo otimização de assets, lazy loading, meta tags estratégicas, JSON-LD, Open Graph, sitemap dinâmico, etc
`,
    publishedAt: '16 de Setembro de 2024',
    attributes: [
      {
        name: 'Stack',
        value: 'React.js, Next.js, Typescript e CSS',
      },
      {
        name: 'Tags',
        value: 'Front-end, SEO, API, Google Maps',
      },
    ],
  },
  {
    id: 4,
    title: 'Site de Imobiliária',
    subtitle: 'Site institucional moderno com catálogo de imóveis',
    thumbnailUrl: '/images/works/casaimoveis-website.png',
    description: `Site institucional moderno com catálogo de imóveis: apresenta os imóveis de forma atrativa, captura leads e reforça a identidade visual da empresa.

![Site de Imobiliária](/images/works/casaimoveis-website.png)

### Recursos:
* Sistema de busca de imóveis com filtros dinâmicos por tipo, preço e localização
* Formulário de contato com envio direto de mensagens de interesse para o sistema através da API
* Galeria de fotos imersiva com visualização em grid ou carrossel com zoom
* Botões de compartilhamento direto para redes sociais
* Contagem de visualizações e compartilhamentos individuais por imóvel
* Layout 100% responsivo, otimizado para todos os dispositivos
* Integração com Google Maps para exibição da localização da imobiliária e dos imóveis
    `,
    publishedAt: '09 de Novembro de 2024',
    attributes: [
      {
        name: 'Stack',
        value: 'React.js, Next.js, Typescript e CSS',
      },
      {
        name: 'Tags',
        value: 'Front-end, SEO, API, Google Maps',
      }
    ],
  }
];
