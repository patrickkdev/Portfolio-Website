import { works } from '@/data/works';
import BlogPostCard from '../shared/FeatureCard';
import MasonryFeatureSection from '../shared/MansoryFeatureSection';

const RecentWorkSection = () => {
  return (
    <>
      <MasonryFeatureSection title="Trabalhos Recentes" eyebrow="Uma seleção de trabalhos recentes" description="Explore alguns dos meus projetos mais recentes, destacando minhas habilidades e experiência.">
        {works.map((work) => (
          <BlogPostCard key={work.id} title={work.title} excerpt={work.description || ''} reading={work.category} href={`/works/${work.id}`} />
        ))}
      </MasonryFeatureSection>
    </>
  );
};

export default RecentWorkSection;
