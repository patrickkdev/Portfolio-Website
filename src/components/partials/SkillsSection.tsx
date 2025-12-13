import ImageSplitFeatureSection from './ImageSplitFeatureSection';

export default function SkillsSection() {
  return (
    <div className="space-y-20">
      <div className='text-center space-y-4'>
        <h2 className="text-3xl font-bold text-primary">
          Minhas Competências Técnicas, sem Mistério
        </h2>
        <p className="text-primary opacity-80">
          As ferramentas que escolho, por que escolho e o que consigo entregar com elas.
        </p>
      </div>
      <ImageSplitFeatureSection
        eyebrow="Back-end"
        title="Go e Echo"
        description={`Go é minha escolha para criar APIs e serviços backend. Trabalho com Echo para construir servidores rápidos, seguros e de fácil manutenção.

Gosto de soluções diretas: um binário único, boa performance e um fluxo claro de leitura. Essa abordagem reduz gargalos e deixa o deploy simples.

Evito camadas desnecessárias, abstrações que ninguém usa e arquiteturas que só complicam o projeto. Go funciona bem justamente porque não precisa de enfeites.

Se quiser ver como estruturo projetos mais robustos, mantenho um blueprint de arquitetura DDD em Go que uso como base nos meus projetos:`}
        image="/images/go-backend.png"
        inverse={false}
        imageClassName='object-left'
      >
        <a href="https://github.com/patrickkdev/go-ddd-blueprint" target="_blank" className="block text-primary-400 underline" rel="noreferrer">
          Clique aqui para ver o blueprint
        </a>
      </ImageSplitFeatureSection>

      <ImageSplitFeatureSection
        eyebrow="Back-end"
        title="Node, Express e Next"
        description={`Tenho familiaridade com Node e seu ecossistema. Já desenvolvi bots, scrapers simples com Puppeteer, apps desktop com Electron e APIs com Express e Next.
      
      Hoje estou mais mergulhado no ecossistema Go, então estou um pouco enferrujado em alguns detalhes do desenvolvimento back-end com TS. Mesmo assim, consigo me virar e entender projetos existentes quando a stack pede TypeScript no servidor.`}
        image="/images/node.png"
        inverse={true}
        imageClassName='object-left'
      />

      <ImageSplitFeatureSection
        eyebrow="Back-end"
        title="Python"
        description={`Python fez parte da minha base como desenvolvedor. Trabalhei com a linguagem em projetos pessoais, automações e alguns serviços internos.

      É uma linguagem que não uso no dia a dia há algum tempo, já que meu foco atual está em linguagens compiladas e com tipagem forte.

      É uma habilidade que não está afiada, mas continua acessível quando necessário.`}
        image="/images/python.png"
        inverse={false}
        imageClassName='object-left'
      />
      
      <ImageSplitFeatureSection
        eyebrow="Front-end"
        title="React e TypeScript"
        description={`Uso React quando a interface exige estado complexo no cliente, interações ricas ou quando o time do cliente já trabalha nesse ecossistema.

Tenho experiência sólida com Next.js em apps SPA e SSR. Aproveito TS para manter tudo seguro, previsível e bem estruturado.

Evito usar React quando o projeto é mais simples do que o framework pede — nem todo sistema precisa carregar um bundle pesado só para renderizar uma lista.`}
        image="/images/react-ts.png"
        inverse={true}
        imageClassName='object-left'
      />

      <ImageSplitFeatureSection
        eyebrow="Front-end"
        title="Templ, HTMX e Alpine.js"
        description={`Esse é meu trio favorito para sistemas internos, painéis administrativos e projetos que precisam entregar valor rápido.

O servidor renderiza tudo e o navegador atualiza só o que muda. Isso reduz a complexidade típica de frontends modernos e deixa o fluxo de desenvolvimento mais leve.

Evito usar SPA quando o projeto não ganha nada com isso. Em muitos casos, HTMX resolve mais rápido, com menos código e com performance excelente.`}
        image="/images/templ-htmx-alpine.png"
        inverse={false}
        imageClassName='object-left'
      />

      <ImageSplitFeatureSection
        eyebrow="Armazenamento"
        title="PostgreSQL e Cloudflare R2"
        description={`PostgreSQL é meu banco principal para dados relacionais. Ele é confiável, poderoso e funciona muito bem com APIs em Go.

Para armazenamento de arquivos, uso Cloudflare R2. Ele é rápido, compatível com S3 e tem custos previsíveis, ideal para projetos que precisam escalar sem susto.

Evito soluções improvisadas para dados e mídia. Cada coisa deve estar no lugar certo — banco para dados estruturados, storage para arquivos.`}
        image="/images/cloudflare-postgres.jpg"
        inverse={true}
      />

      <ImageSplitFeatureSection
        eyebrow="DevOps"
        title="Infraestrutura"
        description={`Gosto de manter a infraestrutura limpa e previsível. Uso Linux, Docker e setups leves para deploys que não quebram do nada.

Configuro VPS, bancos, SSL e automações com naturalidade. Tudo com foco em estabilidade e em diagnósticos fáceis quando algo falha.

Evito ambientes caóticos, configurações manuais que ninguém entende e dependência de ferramentas que só aumentam atrito.`}
        image="/images/devops6.png"
        inverse={false}
      />
    </div>
  );
}
