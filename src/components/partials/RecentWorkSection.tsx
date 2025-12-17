import { works } from '@/data/works';
import FeatureCard from '../shared/FeatureCard';
import Grid from '../shared/Grid';

const RecentWorkSection = () => {
  
  return (
    <div className="space-y-20">
      <header className="text-center space-y-4">
        <h2 className="font-heading font-semibold text-5xl">Uma seleção de trabalhos recentes</h2>
      </header>
      <Grid>
        {works.slice(0, 3).map((work) => (
          <FeatureCard
            key={work.id}
            title={work.title}
            excerpt={work.publishedAt}
            description={work.description}
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
