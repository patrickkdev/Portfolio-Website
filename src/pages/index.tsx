import AboutSection from '@/components/partials/AboutSection';
import ContactSection from '@/components/partials/ContactSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import FaqSection from '@/components/partials/FaqSection';
import FeatureSection from '@/components/partials/FeatureSection';
import HeroSection from '@/components/partials/HeroSection';
import RecentWorkSection from '@/components/partials/RecentWorkSection';
import ServiceSection from '@/components/partials/ServiceSection';
import SideBySideSection from '@/components/partials/SideBySideSection';
import TestimonialSection from '@/components/partials/TestimonialSection';
import { landingPageSections } from '@/data/landing-page-sections';
import AppLayout from '@/layouts/AppLayout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <HeroSection />
      <section className="container pt-20 pb-10">
        <AboutSection />
      </section>

      {/**/}
      {landingPageSections.map((section) => (
        <SideBySideSection
          key={section.id}
          title={section.title}
          inverse={section.inverse}
          left={section.left}
          right={section.right}
          align={section.align}
          // Adiciona um fundo alternado para visualização
          className={section.id === 'intro' || section.id === 'skills' || section.id === 'faq' ? 'bg-white' : 'bg-gray-50'}
        />
      ))}

      <section className="py-16">
        <FeatureSection
          title="Go (Backend)"
          subtitle="APIs rápidas e estáveis"
          description="Sou fluente em Go para construir APIs e web servers usando Echo. Crio binários enxutos, rápidos e fáceis de manter. É minha escolha padrão para qualquer backend robusto. Evito complexidade desnecessária e soluções exageradas."
          imageSrc="/images/services/dashboard.png"
          reverse={false}
        />

        <FeatureSection
          title="React + TypeScript"
          subtitle="Interfaces dinâmicas com segurança de tipos"
          description="Uso para aplicações que precisam de estado cliente complexo ou quando o projeto já envolve uma equipe React. Tenho experiência sólida com Next.js para SPAs e sites institucionais de alta performance."
          imageSrc="
        /images/services/api.png"
          reverse={true}
        />

        <FeatureSection
          title="HTMX + Templ"
          subtitle="Frontend rápido com simplicidade de servidor"
          description="Essa combinação acelera sistemas internos e painéis. O servidor renderiza tudo e o navegador atualiza só o necessário. Isso reduz complexidade e torna o desenvolvimento mais rápido. Uso quando o projeto não precisa de uma SPA pesada."
          linkText="Ver exemplos HTMX"
          linkHref="/portfolio#htmx"
          imageSrc="
        /images/services/ai_cpu.jpg"
          reverse={false}
        />

        <FeatureSection
          title="PostgreSQL & Cloudflare R2"
          subtitle="Dados estruturados e armazenamento escalável"
          description="Prefiro PostgreSQL para dados relacionais. Para armazenamento de objetos uso Cloudflare R2, que é rápido, compatível com S3 e tem custo previsível. Essa dupla cobre praticamente qualquer projeto moderno."
          imageSrc="
        /images/services/sysadmin.jpg"
          reverse={true}
        />
      </section>

      {/**/}
      <section className="container py-16">
        <ExperienceSection />
      </section>
      <section className="container py-16">
        <ServiceSection />
      </section>
      <section className="container py-16">
        <RecentWorkSection />
      </section>
      <section className="container py-16">
        <TestimonialSection />
      </section>
      <section className="container py-16">
        <FaqSection />
      </section>
      <section className="container py-16">
        <ContactSection />
      </section>
    </AppLayout>
  );
};

export default Home;
