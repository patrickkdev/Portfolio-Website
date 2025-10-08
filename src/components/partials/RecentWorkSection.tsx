import Portfolio from '@/components/shared/Portfolio';
import SectionTitle from '@/components/shared/SectionTitle';
import { works } from '@/data/works';
import Link from 'next/link';
import PicBackgroundCard from '../shared/PicBackgroundCard';

const RecentWorkSection = () => {
  return (
    <>
      <SectionTitle>Trabalhos Recentes</SectionTitle>
      <div className="mt-10 grid gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-8">
        {works
          .filter((_, index) => index < 6)
          .map((work) => (
            <a key={work.id} href={`/works/${work.id}`}>
              <PicBackgroundCard key={work.id} image={work.thumbnailUrl} name={work.title} />
            </a>
          ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link href={'/works'} className="btn">
          Ver todos
        </Link>
      </div>
    </>
  );
};

export default RecentWorkSection;
