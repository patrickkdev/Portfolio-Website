import Button from '@/components/form/Button';
import FeatureCard from '@/components/shared/FeatureCard';
import PageTitle from '@/components/shared/PageTitle';
import { works } from '@/data/works';
import AppLayout from '@/pages/AppLayout';

const work = () => {
  return (
    <AppLayout title="Trabalhos">
      <PageTitle
        breadcrumb={[
          { label: 'Início', path: '/' },
          { label: 'Trabalhos', path: '' },
        ]}
      >
        Trabalhos
      </PageTitle>

      <div className="container py-10">
        <div className="grid gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-8">
          {works.map((work) => (
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
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Button className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
            Ver mais
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default work;
