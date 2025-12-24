import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'Sistema Imobiliário Web',
    subtitle: 'Versão web do sistema Sinaionline para imobiliárias',
    tags: ['Front-end', 'Back-end', 'Banco de Dados', 'Integrações', 'Hospedagem', 'Arquitetura'],
    thumbnailUrl: '/images/works/sistema-sinaionline-property-page.png',
    description: `![Sistema Imobiliário Web – Página do imóvel](/images/works/sistema-sinaionline-property-page.png)

O sistema centraliza a gestão de imóveis, clientes, funcionários e leads, fornece dados para sites imobiliários e recebe leads de múltiplas fontes, como site da imobiliária, portais integrados e chatbots.

![Sistema Imobiliário Web – Métricas](/images/works/sistema-sinaionline-metrics-charts.png)
Dashboard de métricas com gráficos claros e interativos, exibindo visualizações de imóveis e desempenho de anúncios.

![Sistema Imobiliário Web – Gestão de fotos do imóvel](/images/works/sistema-sinaionline-picture-manager.png)
Gerenciador de imagens com organização por drag-and-drop, otimização automática e controle de exibição nos portais integrados.

![Sistema Imobiliário Web – Pipeline de leads](/images/works/sistema-sinaionline-pipeline.png)
Pipeline visual de leads, permitindo acompanhamento do funil de vendas e distribuição entre corretores.

![Sistema Imobiliário Web – Detalhes administrativos do imóvel](/images/works/sistema-sinaionline-property-page.png)
Área administrativa com cadastro completo de imóveis, validações inteligentes e integração direta com landing pages e APIs externas.

### Recursos:
- Painel administrativo avançado e intuitivo  
- Organização de itens com suporte a drag-and-drop  
- Gestão integrada de leads, clientes, imóveis, blogs e funcionários de plantão  
- Preenchimento inteligente de formulários com sugestões baseadas em IA  
- Criação e pré-visualização de Landing Pages de imóveis com templates  
- Sistema de fila para envio de e-mails em massa respeitando limites específicos de cada servidor SMTP  
- Métricas detalhadas de visualizações de imóveis com gráficos intuitivos  
- Layout responsivo  
- Renderização no servidor (Server-Side Rendering)  
- API JSON segura com autenticação por Token (consulta de imóveis, inserção de leads, envio de e-mails e integrações externas)
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
      }
    ],
  },
  {
    id: 3,
    title: 'Site de Imobiliária',
    subtitle: 'Site institucional moderno com catálogo de imóveis',
    tags: ['Front-end', 'SEO', 'API', 'Google Maps'],
    thumbnailUrl: '/images/works/fam-index.png',
    description: `![Site de Imobiliária](/images/works/fam-index.png)
    
Site institucional moderno com catálogo de imóveis: apresenta os imóveis de forma atrativa, captura leads e reforça a identidade visual da empresa.

![Site de Imobiliária](/images/works/fam-index-cards.png)
![Site de Imobiliária](/images/works/fam-property-page.png)
![Site de Imobiliária](/images/works/fam-property-page-2.png)

### Recursos:
- Sistema de busca de imóveis com filtros dinâmicos por tipo, preço e localização
- Formulário de contato com envio direto de mensagens de interesse para o sistema através da API
- SEO aprimorado para ranqueamento no Google com palavras-chave, JSON-LD, OpenGraph, Twitter Cards, sitemap dinâmico, etc
- Galeria de fotos imersiva com visualização em grid ou carrossel com zoom
- Botões de compartilhamento direto para redes sociais
- Vídeo banner moderno
- Contagem de visualizações e compartilhamentos individuais por imóvel
- Layout 100% responsivo, otimizado para todos os dispositivos
`,
    publishedAt: '16 de Setembro de 2024',
    attributes: [
      {
        name: 'Stack',
        value: 'React.js, Next.js, Typescript e CSS',
      },
    ],
  },
  {
    id: 2,
    title: 'Site de Imobiliária',
    tags: ['Front-end', 'SEO', 'API', 'Google Maps'],
    thumbnailUrl: '/images/works/casaimoveis-website.png',
    description: `Site institucional moderno com catálogo de imóveis: apresenta os imóveis de forma atrativa, captura leads e reforça a identidade visual da empresa.

### Recursos:
- Sistema de busca de imóveis com filtros dinâmicos por tipo, preço e localização
- Formulário de contato com envio direto de mensagens de interesse para o sistema através da API
- Galeria de fotos imersiva com visualização em grid ou carrossel com zoom
- Botões de compartilhamento direto para redes sociais
- Contagem de visualizações e compartilhamentos individuais por imóvel
- Layout 100% responsivo, otimizado para todos os dispositivos
- Integração com Google Maps para exibição da localização da imobiliária e dos imóveis
    `,
    publishedAt: '09 de Novembro de 2024',
    attributes: [
      {
        name: 'Stack',
        value: 'React.js, Next.js, Typescript e CSS',
      },
    ],
  },
  {
    id: 5,
    title: 'ChatMaster',
    subtitle: 'Aplicação desktop para automação do WhatsApp',
    description: `![ChatMaster App](/images/works/chatmaster.png)
    
O ChatMaster foi um app desktop para automação do WhatsApp. O projeto explorava a API não oficial do WhatsApp Web, viabilizando automações de alto valor como respostas automáticas e envio em massa de mensagens.

Com o tempo, o principal trade-off técnico ficou evidente: a dependência de uma API não oficial, que quebrava com frequência e trazia risco real de banimento de contas, tornando o produto inviável no longo prazo.

![ChatMaster Website](/images/works/chatmaster-website.png)

Ainda assim, o ChatMaster é um projeto do qual me orgulho. Além de ter chegado a faturar com a venda de algumas licenças, envolveu front-end, back-end, aplicação desktop e controle de assinaturas, trazendo aprendizados importantes sobre engenharia reversa e os limites de integrações não suportadas oficialmente.

### Demonstração do envio em massa de mensagens:
<video src="/images/works/chatmaster-envio-em-massa.mp4" controls></video>

Se fosse refeito hoje, seria construído sobre a API oficial do WhatsApp, mesmo com suas burocracias e restrições, e consideraria a integração de IA para melhorar o modo chatbot.

### Demonstração do chatbot:
<video src="/images/works/chatmaster-chatbot.mp4" controls></video>

### Recursos:
- Envio em massa de mensagens para lista de números, participantes de grupos, contatos salvos, etc
- Construtor de conversas visual e intuitivo em árvore
- Customização de menus interativos com opções numéricas (1, 2, 3, 0 para voltar)
- Uso de placeholders dinâmicos como \${nome}, permitindo personalização automática das mensagens por usuário
- Servidor back-end simples em Python com MySQL para controle de acesso dos usuários
`,
    publishedAt: '30 de Julho de 2022',
    tags: ['Full-stack', 'Desktop', 'Chatbot', 'WhatsApp', 'Automação'],
    thumbnailUrl: '/images/works/chatmaster.png',
    attributes: [
      {
        name: 'Stack',
        value: 'Typescript, Electron.js, whatsapp-web.js, Python e CSS',
      },
    ],
  }
];
