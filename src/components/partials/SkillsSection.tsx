import ExternalLinks from '@/lib/api/external-links';
import ExternalLink from '../shared/ExternalLinks';
import ImageSplitFeatureSection from './ImageSplitFeatureSection';

export default function SkillsSection() {  
  return (
    <div className="space-y-20">
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="font-heading font-semibold text-5xl">Minhas Competências Técnicas, sem Mistério</h2>
        <p className="text-primary opacity-80">As ferramentas que escolho, por que escolho e o que consigo entregar com elas.</p>
      </header>
      <ImageSplitFeatureSection
        eyebrow="Back-end"
        title="Go e Echo"
        description={<p className='mt-6 text-lg text-primary opacity-80 whitespace-pre-line'><ExternalLink href={ExternalLinks.golang}>Go</ExternalLink> é minha primeira escolha para criar APIs e serviços back-end. Uso o framework <ExternalLink href={ExternalLinks.labstackEcho}>Echo</ExternalLink> para construir servidores rápidos, seguros e de fácil manutenção. <br /><br />

Escolho Go por ser uma linguagem de tipagem forte, orientada à simplicidade, com excelente desempenho e foco em segurança. O fato de ser compilada também contribui para um processo de deploy mais direto e menos sujeito a variações de ambiente. <br /><br />

Veja o <ExternalLink href={ExternalLinks.golangDDDBlueprint}>blueprint de arquitetura DDD em Go</ExternalLink> que uso como base nos meus projetos.</p>}
        image="/images/go-backend.png"
        inverse={false}
        imageClassName='object-left'
      >
      </ImageSplitFeatureSection>

      <ImageSplitFeatureSection
        eyebrow="Front-end"
        title="React e Next.js"
        description={<p className='mt-6 text-lg text-primary opacity-80 whitespace-pre-line'>Tenho experiência sólida com Next.js e React. <br /><br />
        Escolho essa dupla quando o projeto precisa de interações ricas no navegador ou quando o time do cliente já trabalha nesse ecossistema.<br /><br />

Evito usar React quando o projeto é mais simples, e uso algo como HTML, CSS, JS, <ExternalLink href={ExternalLinks.htmx}>HTMX</ExternalLink> e <ExternalLink href={ExternalLinks.alpinejs}>Alpine.js</ExternalLink> no lugar — nem todo sistema precisa carregar um bundle pesado.</p>}
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
