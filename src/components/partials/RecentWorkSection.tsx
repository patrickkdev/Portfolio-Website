import { works } from '@/data/works';
import FeatureCard from '../shared/FeatureCard';
import Grid from '../shared/Grid';
import SectionHeader from '../shared/SectionHeader';

export const worksSectionID = 'works-section';

const RecentWorkSection = () => {
  return (
    <div id={worksSectionID} className="space-y-12 lg:space-y-16">
      <SectionHeader eyebrow="Trabalhos" title="Projetos em destaque" />
      <Grid>
        {works.slice(0, 6).map((work) => (
          <FeatureCard
            key={work.id}
            title={work.title}
            excerpt={work.publishedAt}
            description={work.subtitle}
            href={`/works/${work.id}`}
            imageSrc={work.thumbnailUrl}
            cta='Leia mais'
          />
        ))}
      </Grid>
    </div>
  );
};

export default RecentWorkSection;
