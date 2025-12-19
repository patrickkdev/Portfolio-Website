import ProgressBar from '@/components/shared/ProgressBar';
import { skills } from '@/data/skills';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import Button from '../form/Button';
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
              <p className="opacity-90 text-pretty tracking-normal">
                Desenvolvedor full-stack especializado na criação de sites, sistemas, APIs, automações e aplicativos, sempre priorizando código legível, bem estruturado
                e de fácil manutenção. <br /><br />
              
                Tenho experiência entregando projetos de ponta a ponta, da arquitetura ao deploy. <br /><br />
              
                Sou usuário avançado de <strong>Linux</strong>, com experiência prática em setup, troubleshooting e otimização.
              </p>
            </div>
          </div>
          {/* Skills */}
          <div className="grid grid-cols-2 gap-12 items-center card h-fit">
            {
              skills.map((skill, index) => ({
                ...skill,
                color: index == 0 ? 'blue-500' : index == 1 ? 'fuchsia-500' : index == 2 ? 'indigo-700' : 'red-500'
              })).map((skill, index) => (
                <div key={index}>
                  <div className="mb-3 flex justify-between">
                    <div>
                      <h6 className="font-semibold">{skill.name}</h6>
                      <small className="opacity-80 line-clamp-1">{skill.description}</small>
                    </div>
                    <p>{skill.progress}%</p>
                  </div>
                  <ProgressBar progress={skill.progress} fillClassName={'bg-primary-600 dark:bg-primary-400'} />
                </div>
              ))
            }
          </div>
          <Button download href="/Patrick_Ferreira.pdf" className="max-w-none justify-center lg:max-w-xs">
            Baixar CV 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>
          </Button>
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
