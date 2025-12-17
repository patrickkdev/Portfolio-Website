import ProgressBar from '@/components/shared/ProgressBar';
import { skills } from '@/data/skills';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import SectionHeader from '../shared/SectionHeader';
import GitHubStats from './GithubStats';

const AboutSection = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <SectionHeader title="Sobre mim" />

      <div className="space-y-12 lg:space-y-18">
        <div className="grid grid-cols-1 gap-8 lg:gap-6 lg:grid-cols-2 lg:gap-x-6">
          {/* Bio */}
          <div>
            <div className='space-y-4'>
              <p>
                Desenvolvedor full-stack especializado na criação de sites, sistemas, APIs, automações e aplicativos, sempre priorizando código legível, bem estruturado
                e fácil de manter.
              </p>
              <p>
                Tenho experiência entregando projetos de ponta a ponta, <strong>da arquitetura ao deploy</strong>.
              </p>
              <p>
                Sou usuário avançado de <strong>Linux</strong>, com experiência prática em setup,
                troubleshooting e otimização.
              </p>
            </div>
          </div>
          {/* Skills */}
          <div className="grid grid-cols-2 gap-6 rounded-xl lg:p-6 lg:shadow-lg lg:bg-white lg:dark:bg-gray-700">
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
          <a download href="/Patrick_Ferreira.pdf" className="btn w-full max-w-none lg:max-w-xs">Baixar CV</a>
        </div>
        {/* Overview */}
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="flex">
            <div className="mr-5 text-gray-300">
              <HiOutlineFire size={50} />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold">25+</h2>
              <p className="mt-1">Projetos concluídos</p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-5 text-gray-300">
              <HiOutlineUsers size={50} />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold">400+</h2>
              <p className="mt-1">Clientes satisfeitos</p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-5 text-gray-300">
              <HiOutlineChartBar size={50} />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold">4+</h2>
              <p className="mt-1">Anos de experiência</p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-5 text-gray-300">
              <FiCoffee size={50} />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold">5+</h2>
              <p className="mt-1">Xícaras de café/dia</p>
            </div>
          </div>
        </div>
        <GitHubStats />
      </div>
    </div>
  );
};

export default AboutSection;
