import AboutSection from '@/components/partials/AboutSection';
import ContactSection from '@/components/partials/ContactSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import FaqSection from '@/components/partials/FaqSection';
import HeroSection from '@/components/partials/HeroSection';
import RecentWorkSection from '@/components/partials/RecentWorkSection';
import ServiceSection from '@/components/partials/ServiceSection';
import SkillsSection from '@/components/partials/SkillsSection';
import WorkStyleSection from '@/components/partials/WorkStyleSection';
import AppLayout from '@/layouts/AppLayout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <AppLayout title='Patrick Ferreira - Desenvolvedor Full-stack'>
      <HeroSection />
      <section className="container py-12 lg:py-16">
        <AboutSection />
      </section>
      <section className="container py-12 lg:py-16">
        <WorkStyleSection />
      </section>
      <section className="container py-12 lg:py-16">
        <SkillsSection />
      </section>
      <section className="container py-12 lg:py-16">
        <ExperienceSection />
      </section>
      <section className="container py-12 lg:py-16">
        <ServiceSection />
      </section>
      <section className="container py-12 lg:py-16">
        <RecentWorkSection />
      </section>
      {/* <section className="container py-12 lg:py-16">
        <TestimonialSection />
      </section> */}
      {/* <section className="container py-12 lg:py-16">
        <BlogSection />
      </section> */}
      <section className="container py-12 lg:py-16">
        <FaqSection />
      </section>
      <section className="container py-12 lg:py-16">
        <ContactSection />
      </section>
    </AppLayout>
  );
};

export default Home;
