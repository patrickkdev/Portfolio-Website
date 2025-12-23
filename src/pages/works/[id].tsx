import Button from '@/components/form/Button';
import { works } from '@/data/works';
import AppLayout from '@/layouts/AppLayout';
import { Work } from '@/types';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import Slider, { Settings } from 'react-slick';

const settings: Settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

type Props = {
  work: Work & {
    description: string;
    images: string[];
    publishedAt: string;
    previewUrl: string;
  };
};

const WorkDetail: React.FunctionComponent<Props> = ({ work }) => {
  return (
    <AppLayout title="Detalhes do trabalho">
      <div className="container">
        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">{work.title}</h1>
          <p className="mt-4 flex items-center opacity-80">
            <span>{work.publishedAt}</span>
            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span>{work.category}</span>
          </p>
        </div>
        <div className="mt-10">
          <Slider {...settings} nextArrow={<button><ArrowRight /></button>} prevArrow={<button><ArrowLeft className='text-sky-500' /></button>}>
            {work.images.map((image, index) => (
              <div className="overflow-hidden rounded-xl" key={index}>
                <Image
                  src={image}
                  height={720}
                  width={1280}
                  alt={work.title}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto'
                  }} />
              </div>
            ))}
          </Slider>
          {
            work.previewUrl && (
              <div className="mt-6 flex justify-center">
                <Link href={work.previewUrl} className="btn">
                  Acessar
                </Link>
              </div>
            )
          }
        </div>

        <div className="my-10 whitespace-pre-line">
          <h3 className="text-xl font-semibold">Descrição</h3>
          <Markdown
            components={{
              a: ({node, ...props}) => <a className="text-blue-500 hover:underline" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside whitespace-normal" {...props} />,
              li: ({node, ...props}) => <li {...props} />,
            }}
          >
            {work.description}
          </Markdown>
          <h3 className="mt-10 text-xl font-semibold">Recursos</h3>
          <ul className="mt-4 list-disc pl-4">
            {work.featureList.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="my-10 rounded-lg bg-gray-50 py-3 shadow-md dark:bg-gray-700">
          <table className="w-full">
            <tbody>
              {work.attributes.map((attribute, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 font-semibold">{attribute.name}</td>
                  <td>{attribute.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-10 flex max-h-48 flex-col items-center justify-center">
          <h2 className="text-center font-semibold text-3xl md:text-4xl mb-4 md:mb-6 text-pretty">Quer construir um projeto assim?</h2>
          <Button href="/contact" rainbow>
            Entre em contato
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const work = works.find((work) => work.id === Number(id));
  if (work) {
    return {
      props: {
        work,
      },
    };
  }
  return {
    notFound: true,
  };
};
export default WorkDetail;
