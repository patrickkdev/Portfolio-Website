import Button from '@/components/form/Button';
import Image from 'next/image';
import Link from 'next/link';
import { BsDiscord, BsWhatsapp } from 'react-icons/bs';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { ReactTyped } from 'react-typed';
import HeroBackground from './HeroBackground';

const HeroSection = () => {
  return (
    <div className="hero relative flex items-center justify-center">
      <HeroBackground />
      <div className="flex w-full flex-col items-center space-y-6">
        {/* <div className="rounded-full w-fit pl-2 pr-3 flex gap-[2px] text-center justify-center items-center">
          <PulseIcon />
          <small>Disponível</small>
        </div> */}
        <div className="overflow-hidden">
          <Image
            loading='eager'
            className="aspect-square rounded-xl object-cover"
            src="/images/avatar/me.png"
            width={200}
            height={200}
            alt="avatar"
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </div>
        <h1 className="text-3xl font-bold text-center">Patrick Ferreira</h1>
        <div className="flex gap-1 text-center h-[2rem] opacity-80 justify-center items-center w-[300px] text-pretty">
          {' '}
          <ReactTyped
            strings={[
              'Desenvolvedor de software full-stack',
              'Crio sites, sistemas, APIs, automações e aplicativos web',
              'Usando Golang, Node, Typescript, HTML, CSS, React, SQL',
              'Conecto sistemas a qualquer API, incluindo pagamentos e IA',
              'Código limpo, testes e preocupação com boas práticas',
            ]}
            typeSpeed={20}
            backSpeed={20}
            backDelay={3000}
            loop
          />
        </div>
        <div className="flex gap-5 pt-4">
          <Link
            href="https://www.github.com/patrickkdev"
            className="text-gray-900 dark:text-white transition-colors duration-150 hover:text-primary-500"
          >
            <FiGithub size={25} />
          </Link>
          <Link
            href="https://wa.me/5531996442788?text=Olá Patrick!"
            className="text-[#25A950] dark:text-[#25D366] transition-colors duration-150 hover:text-primary-500"
          >
            <BsWhatsapp size={25} />
          </Link>
          <Link
            href="https://discord.com/users/patrickkdev"
            className="text-[#5865F2] dark:text-[#5865F2] transition-colors duration-150 hover:text-primary-500"
          >
            <BsDiscord size={25} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/patrickkdev/"
            className="text-[#0A66C2] dark:text-[#0A66C2] transition-colors duration-150 hover:text-primary-500"
          >
            <FiLinkedin size={25} />
          </Link>
        </div>
        <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
          Vamos Conversar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </Button>
      </div>
      <div className="absolute bottom-0 mb-10 flex flex-col items-center">
        <p className="mb-3 text-sm">Role para baixo</p>
        <div className="relative flex h-9 w-6 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1.5 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '7px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
