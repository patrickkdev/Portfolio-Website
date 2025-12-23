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
          <>
            <ExternalLink href={ExternalLinks.golang}>Go</ExternalLink> é minha primeira escolha para criar APIs e serviços back-end. Uso o framework <ExternalLink href={ExternalLinks.labstackEcho}>Echo</ExternalLink> para construir servidores rápidos, seguros e de fácil manutenção. <br /><br />
            Escolho Go por ser uma linguagem de tipagem forte, simples por natureza, com excelente desempenho e foco em segurança. <br /><br />
            Por ser compilada, gera binários estáticos autossuficientes, o que simplifica o processo de deploy e reduz drasticamente problemas com dependências externas que outras linguagens apresentam. <br /><br />

            Veja o <ExternalLink href={ExternalLinks.golangDDDBlueprint}>blueprint de arquitetura DDD em Go</ExternalLink> que uso como base nos meus projetos.
          </>
        }
        image="/images/go-backend.png"
        inverse={false}
        imageClassName='object-left'
      >
      </ImageSplitFeatureSection>
      <ImageSplitFeatureSection
        title="React e Next.js"
        description={
          <>
            Tenho experiência sólida com <ExternalLink href={ExternalLinks.react}>React</ExternalLink> e <ExternalLink href={ExternalLinks.nextjs}>Next.js</ExternalLink>. <br /><br />

            Escolho essa dupla quando o projeto exige interações ricas no navegador. <br /><br />

            O Next.js traz vantagens nativas como <ExternalLink href={ExternalLinks.ssr}>SSR</ExternalLink> e otimizações automáticas de performance, que contribuem para melhorar o <ExternalLink href={ExternalLinks.seo}>SEO</ExternalLink>. <br /><br />
            
            Além disso, ele permite criar <ExternalLink href={ExternalLinks.nextApiRoutes}>API Routes</ExternalLink> dentro do mesmo projeto, que funcionam como um back-end leve embutido. Isso reduz fricções comuns entre back-end e front-end, e simplifica a manutenção da aplicação.
          </>
        }
        image="/images/react-ts.png"
        inverse={true}
        imageClassName='object-left'
      />

      <ImageSplitFeatureSection
        title="Templ, HTMX e Alpine.js"
        description={
          <>
            Para projetos onde a simplicidade é prioridade, opto por uma stack mais enxuta no front-end. Esse é meu trio favorito para sistemas internos, painéis administrativos e produtos que precisam entregar valor rapidamente. <br /><br />

            O servidor renderiza as páginas e o navegador atualiza apenas o que muda. Isso reduz a complexidade comum em front-ends modernos e o desenvolvimento fica mais rápido.
          </>
        }
        image="/images/templ-htmx-alpine.png"
        inverse={false}
        imageClassName='object-left'
      />

      <ImageSplitFeatureSection
        title="Node"
        description={
          <>
            Tenho familiaridade com <ExternalLink href={ExternalLinks.node}>Node</ExternalLink> e seu ecossistema. Já desenvolvi alguns menos menores como chatbots, scrapers, apps desktop e APIs usando tecnologias como <ExternalLink href={ExternalLinks.puppeteer}>Puppeteer</ExternalLink>, <ExternalLink href={ExternalLinks.electron}>Electron</ExternalLink> e <ExternalLink href={ExternalLinks.express}>Express</ExternalLink>. <br /><br />
          </>
        }
        image="/images/node.png"
        inverse={true}
        imageClassName='object-left'
      />

      <ImageSplitFeatureSection
        title="Python"
        description={
          <>
            <ExternalLink href={ExternalLinks.python}>Python</ExternalLink> fez parte da minha base como desenvolvedor. Trabalhei com a linguagem em projetos pessoais, automações e alguns serviços internos. <br /><br />

            É uma linguagem que <strong>não</strong> uso no dia a dia há algum tempo, já que meu foco atual está em linguagens compiladas e com tipagem forte. <br /><br />

            É uma habilidade que não está afiada, mas continua acessível quando necessário.
          </>
        }
        image="/images/python.png"
        inverse={false}
        imageClassName='object-left'
      />


      <ImageSplitFeatureSection
        title="PostgreSQL e Cloudflare R2"
        description={
          <>
            Trabalho diariamente com MySQL, mas o <ExternalLink href={ExternalLinks.postgresql}>PostgreSQL</ExternalLink> é minha escolha principal para dados relacionais. Ele é extensível, confiável e se integra muito bem com aplicações em Go, usando drivers maduros como o <ExternalLink href={ExternalLinks.pgx}>PGX</ExternalLink>. <br /><br />

            Para armazenamento de arquivos na nuvem, utilizo o <ExternalLink href={ExternalLinks.cloudflareR2}>Cloudflare R2</ExternalLink>. A <ExternalLink href={ExternalLinks.r2s3Compatible}>compatibilidade com a API do S3</ExternalLink> facilita a integração com SDKs e ferramentas já consolidadas.

            A integração nativa com <ExternalLink href={ExternalLinks.cloudflareWorkers}>Workers</ExternalLink> permite, por exemplo, <ExternalLink href={ExternalLinks.cloudflareImageTransform}>processar imagens próximo ao storage</ExternalLink>, simplificando a arquitetura. <br /><br />
          </>
        }
        image="/images/cloudflare-postgres.jpg"
        inverse={true}
      />

      <ImageSplitFeatureSection
        title="Deploy e Infraestrutura"
        description={
          <>
            Tenho experiência administrando servidores Linux, gerenciando domínios e configurando <strong>DNS</strong> e <strong>SSL</strong> com <ExternalLink href={ExternalLinks.letsEncrypt}>Let’s Encrypt</ExternalLink>. <br /><br />

            Utilizo plataformas como <ExternalLink href={ExternalLinks.netlify}>Netlify</ExternalLink> e <ExternalLink href={ExternalLinks.vercel}>Vercel</ExternalLink> para front-ends e projetos que se beneficiam de deploys rápidos e infraestrutura gerenciada. <br /><br />
            
            Para hospedagens próprias, uso <ExternalLink href={ExternalLinks.dokploy}>Dokploy</ExternalLink> e <ExternalLink href={ExternalLinks.docker}>Docker</ExternalLink>, mas também trabalho com setups mais diretos, utilizando <strong>systemd</strong> e <ExternalLink href={ExternalLinks.nginx}>Nginx</ExternalLink> quando faz mais sentido. <br /><br />
          </>
        }
        image="/images/devops6.png"
        inverse={false}
      />
    </div>
  );
}
