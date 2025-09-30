import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>Sobre Mim</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            Olá, eu sou Patrick, desenvolvedor web full-stack e entusiasta da criação de soluções digitais que funcionam
            de verdade. Vivo em Nova Lima, Minas Gerais, e transformo ideias em sistemas, websites e aplicativos
            personalizados, combinando design elegante, performance e tecnologia de ponta.
          </p>
          <Button className="mt-5">Baixar CV</Button>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Backend (Go/TS)</h6>
              <p>80%</p>
            </div>
            <ProgressBar color="blue" progress={80} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Frontend (React / Vanilla) </h6>
              <p>80%</p>
            </div>
            <ProgressBar color="amber" progress={80} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Linux (Desktop/Servidores)</h6>
              <p>80%</p>
            </div>
            <ProgressBar color="rose" progress={80} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Inglês</h6>
              <p>65%</p>
            </div>
            <ProgressBar color="green" progress={65} />
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">30+</h2>
            <p className="mt-1">Projetos concluídos</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">20+</h2>
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
