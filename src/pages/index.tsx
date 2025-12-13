import AboutSection from '@/components/partials/AboutSection';
import ContactSection from '@/components/partials/ContactSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import FaqSection from '@/components/partials/FaqSection';
import GitHubStatsSection from '@/components/partials/GithubStatsSection';
import HeroSection from '@/components/partials/HeroSection';
import RecentWorkSection from '@/components/partials/RecentWorkSection';
import ServiceSection from '@/components/partials/ServiceSection';
import SkillsSection from '@/components/partials/SkillsSection';
import TestimonialSection from '@/components/partials/TestimonialSection';
import WorkStyleSection from '@/components/partials/WorkStyleSection';
import AppLayout from '@/layouts/AppLayout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <AppLayout title='Patrick Ferreira - Desenvolvedor Full-stack'>
      <HeroSection />
      <section className="container pt-8 pb-10">
        <AboutSection />
      </section>
      <section className="container pb-10">
        <GitHubStatsSection />
      </section>
      <section className="container py-16">
        <WorkStyleSection />
      </section>
      <section className="container py-16">
        <SkillsSection />
      </section>
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
