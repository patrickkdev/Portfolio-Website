import ExternalLinks from '@/lib/api/external-links';
import ExternalLink from '../shared/ExternalLinks';
import SectionHeader from '../shared/SectionHeader';
import ImageSplitFeatureSection from './ImageSplitFeatureSection';

export default function SkillsSection() {  
  return (
    <div className="space-y-12 lg:space-y-16">
      <SectionHeader eyebrow="Habilidades" title="As tecnologias que escolho, por que escolho e o que consigo entregar com elas." />
      <ImageSplitFeatureSection
        title="Go e Echo"
        description={
          <p className='mt-6 lg:mt-4 text-lg text-primary opacity-80 whitespace-pre-line text-pretty leading-8'>
            <ExternalLink href={ExternalLinks.golang}>Go</ExternalLink> é minha primeira escolha para criar APIs e serviços back-end. Uso o framework <ExternalLink href={ExternalLinks.labstackEcho}>Echo</ExternalLink> para construir servidores rápidos, seguros e de fácil manutenção. <br /><br />
            Escolho Go por ser uma linguagem de tipagem forte, simples por natureza, com excelente desempenho e foco em segurança. <br /><br />
            Por ser compilada, gera binários estáticos autossuficientes, o que simplifica o processo de deploy e reduz drasticamente problemas com dependências externas que outras linguagens apresentam. <br /><br />

            Veja o <ExternalLink href={ExternalLinks.golangDDDBlueprint}>blueprint de arquitetura DDD em Go</ExternalLink> que uso como base nos meus projetos.
          </p>
        }
        image="/images/go-backend.png"
        inverse={false}
        imageClassName='object-left'
      >
      </ImageSplitFeatureSection>

      <ImageSplitFeatureSection
        title="React e Next.js"
        description={<p className='mt-6 lg:mt-4 text-lg text-primary opacity-80 whitespace-pre-line text-pretty leading-8'>Tenho experiência sólida com <ExternalLink href={ExternalLinks.react}>React</ExternalLink> e <ExternalLink href={ExternalLinks.nextjs}>Next.js</ExternalLink>. <br /><br />
        Escolho essa dupla quando o projeto precisa de interações ricas no navegador ou quando o time do cliente já trabalha nesse ecossistema.<br /><br />

        O Next.js traz vantagens nativas como <ExternalLink href={ExternalLinks.ssr}>SSR</ExternalLink> e otimizações automáticas de performance, que ajudam a melhorar o <ExternalLink href={ExternalLinks.seo}>SEO</ExternalLink>. Além disso, o back-end integrado via rotas de API, permite centralizar a lógica de negócio e o fornecimento de dados em um único projeto de forma eficiente. <br /><br />

        Nem todo sistema precisa de um <ExternalLink href={ExternalLinks.spa}>SPA</ExternalLink> robusto. Para projetos onde a simplicidade reina, deixo o React de lado e escolho uma stack mais minimalista.</p>}
        image="/images/react-ts.png"
        inverse={true}
        imageClassName='object-left'
      />

      <ImageSplitFeatureSection
        title="Templ, HTMX e Alpine.js"
        description={
          <p className='mt-6 lg:mt-4 text-lg text-primary opacity-80 whitespace-pre-line text-pretty leading-8'>
            Esse é meu trio favorito para sistemas internos, painéis administrativos e projetos que precisam entregar valor rápido. <br /><br />

            O servidor renderiza tudo e o navegador atualiza só o que muda. Isso reduz a complexidade típica de frontends modernos e deixa o fluxo de desenvolvimento mais leve. <br /><br />

            Evito usar SPA quando o projeto não ganha nada com isso. Em muitos casos, HTMX resolve mais rápido, com menos código e com performance excelente.
          </p>
        }
        image="/images/templ-htmx-alpine.png"
        inverse={false}
        imageClassName='object-left'
      />

      <ImageSplitFeatureSection
        title="Node, Express e Next"
        description={
          <p className='mt-6 lg:mt-4 text-lg text-primary opacity-80 whitespace-pre-line text-pretty leading-8'>
            Tenho familiaridade com <ExternalLink href={ExternalLinks.node}>Node</ExternalLink> e seu ecossistema. Já desenvolvi bots, scrapers simples com <ExternalLink href={ExternalLinks.puppeteer}>Puppeteer</ExternalLink>, apps desktop com <ExternalLink href={ExternalLinks.electron}>Electron</ExternalLink> e APIs com <ExternalLink href={ExternalLinks.express}>Express</ExternalLink>. <br /><br />
      
            Hoje estou mais mergulhado no ecossistema Go, então estou um pouco sem prática no desenvolvimento back-end com TS. Mesmo assim, consigo me virar com facilidade e entender projetos existentes.
          </p>
        }
        image="/images/node.png"
        inverse={true}
        imageClassName='object-left'
      />

      <ImageSplitFeatureSection
        title="Python"
        description={
          <p className='mt-6 lg:mt-4 text-lg text-primary opacity-80 whitespace-pre-line text-pretty leading-8'>
            <ExternalLink href={ExternalLinks.python}>Python</ExternalLink> fez parte da minha base como desenvolvedor. Trabalhei com a linguagem em projetos pessoais, automações e alguns serviços internos. <br /><br />

            É uma linguagem que <strong>não</strong> uso no dia a dia há algum tempo, já que meu foco atual está em linguagens compiladas e com tipagem forte. <br /><br />

            É uma habilidade que não está afiada, mas continua acessível quando necessário.
          </p>
        }
        image="/images/python.png"
        inverse={false}
        imageClassName='object-left'
      />


      <ImageSplitFeatureSection
        title="PostgreSQL e Cloudflare R2"
        description={
          <p className='mt-6 lg:mt-4 text-lg text-primary opacity-80 whitespace-pre-line text-pretty leading-8'>
            <ExternalLink href={ExternalLinks.postgresql}>PostgreSQL</ExternalLink> é meu banco principal para dados relacionais. Ele é confiável, poderoso e funciona muito bem com APIs em Go. <br /><br />

            Para armazenamento de arquivos, uso <ExternalLink href={ExternalLinks.cloudflareR2}>Cloudflare R2</ExternalLink>. Ele é rápido, compatível com <ExternalLink href={ExternalLinks.s3}>S3</ExternalLink> e tem custos previsíveis, ideal para projetos que precisam <strong>escalar sem susto</strong>. <br /><br />

            Evito soluções improvisadas para dados e mídia. Cada coisa deve estar no lugar certo — banco para dados estruturados, storage para arquivos.
          </p>
        }
        image="/images/cloudflare-postgres.jpg"
        inverse={true}
      />

      <ImageSplitFeatureSection
        title="Deploy e Infraestrutura"
        description={
          <p className='mt-6 lg:mt-4 text-lg text-primary opacity-80 whitespace-pre-line text-pretty leading-8'>
            Gosto de manter a infraestrutura limpa e previsível. Uso Linux, Docker e setups leves para deploys que não quebram do nada. <br /><br />

            Configuro VPS, bancos, SSL e automações com naturalidade. Tudo com foco em estabilidade e em diagnósticos fáceis quando algo falha. <br /><br />

            Evito ambientes caóticos, configurações manuais que ninguém entende e dependência de ferramentas que só aumentam atrito.
          </p>
        }
        image="/images/devops6.png"
        inverse={false}
      />
    </div>
  );
}
