import PicBackgroundCard from '@/components/shared/PicBackgroundCard';
import SectionTitle from '@/components/shared/SectionTitle';
import { services } from '@/data/services';

const ServiceSection = () => {
  return (
    <>
      <SectionTitle>Serviços</SectionTitle>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <PicBackgroundCard key={index} name={service.name} description={service.description} image={service.image} />
        ))}
      </div>
    </>
  );
};

export default ServiceSection;