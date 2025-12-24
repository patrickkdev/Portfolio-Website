/* eslint-disable @next/next/no-img-element */
import Button from '@/components/form/Button';
import { works } from '@/data/works';
import AppLayout from '@/layouts/AppLayout';
import { Work } from '@/types';
import { Dot } from 'lucide-react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { Settings } from 'react-slick';
import rehypeRaw from 'rehype-raw';

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
      <div className="container max-w-5xl">
        <div className="mt-24 space-y-4 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">{work.title}</h1>
          <p className="flex items-center opacity-80">
            <span>{work.publishedAt}</span>
          </p>
          {
            work.tags.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap justify-center items-center">
                {
                  work.tags.map((tag, index) => (
                    <div className='flex items-center gap-2' key={tag}>
                      <small className="bg-primary-400 dark:bg-primary-600 px-2 py-0.25 rounded font-bold">{tag}</small>
                      {index !== work.tags.length - 1 && <Dot />}
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
        <div className="mt-10">
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
          <Markdown
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-2xl font-semibold" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-xl font-semibold" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-lg font-semibold" {...props} />,
              h4: ({node, ...props}) => <h4 className="text-md font-semibold" {...props} />,
              h5: ({node, ...props}) => <h5 className="text-sm font-semibold" {...props} />,
              h6: ({node, ...props}) => <h6 className="text-xs font-semibold" {...props} />,
              a: ({node, ...props}) => <a className="text-blue-500 hover:underline" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside whitespace-normal" {...props} />,
              li: ({node, ...props}) => <li {...props} />,
              video: ({node, ...props}) => <video controls className="w-full aspect-video bg-black" {...props} />,
              img: ({node, ...props}) => <div className="w-full p-2"><img alt={props.alt || ''} className="w-full rounded-xl shadow-xl hover:scale-[1.02]" {...props} /></div>
            }}
          >
            {work.description}
          </Markdown>
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
