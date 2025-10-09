import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';
import { skills } from '@/data/skills';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>Sobre Mim</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            Sou entusiasta da criação de solucões digitais que funcionam de
            verdade. Vivo em Nova Lima, Minas Gerais, e transformo ideias em
            sistemas, websites e aplicativos personalizados, combinando design
            elegante, performance e tecnologia de ponta. Trabalho principalmente
            com React no front-end, Go no back-end e SQL para bancos de
            dados, mantendo codigo limpo, legivel e bem estruturado.
          </p>
          <a download href="/Patrick_Ferreira.pdf" className="btn mt-5">Baixar CV</a>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          {
            skills.map((skill, index) => ({
              ...skill,
              color: index == 0 ? 'blue' : index == 1 ? 'green' : index == 2 ? 'red' : 'yellow' as 'red' | 'blue' | 'green' | 'yellow'
            })).map((skill, index) => (
              <div key={index}>
                <div className="mb-3 flex justify-between">
                  <div>
                    <h6 className="font-semibold">{skill.name}</h6>
                    <small className="opacity-80">{skill.description}</small>
                  </div>
                  <p>{skill.progress}%</p>
                </div>
                <ProgressBar color={skill.color} progress={skill.progress} />
              </div>
            ))
          }

        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">20+</h2>
            <p className="mt-1">Projetos concluídos</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">500+</h2>
            <p className="mt-1">Clientes satisfeitos</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">6+</h2>
            <p className="mt-1">Anos de experiência</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FiCoffee size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">5+</h2>
            <p className="mt-1">Xícaras de café/dia</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
