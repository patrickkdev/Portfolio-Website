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
      {/* <div className="mt-10 flex items-center justify-center">
        <Button className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
          Ver mais
        </Button>
      </div> */}
    </div>
  );
};

export default RecentWorkSection;
